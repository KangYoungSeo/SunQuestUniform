const express = require('express')
const app = express()
const port = 3000
var fs = require('fs'); 
var http = require('http');
var static = require('serve-static');
var template = require('./template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');
var bodyParser = require('body-parser');
var ejs = require('ejs'); // html 랜더링
const { nextTick } = require('process');

//app.use(static(path.join(__dirname,'../assets')));  // ejs 불가능 
//app.use(static(path.join(__dirname,'assets'))); // ejs 가능 
//app.use('/contact', static(path.join(__dirname,'assets'))); // ejs 불가능 
//app.use('/', express.static('assets')); // ejs 가능 
app.use(express.static('assets')); // ejs 가능

app.set("views", __dirname); // ejs 파일 가져올 폴더 지정(프로젝트명) 및 ejs 관련 설정
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.use(bodyParser.urlencoded({extend : false}));
//app.use(bodyParser.urlencoded({ extended: false })); 

app.get('/', function(request, response){ // home으로 들어오면, 여기가 응답되도록 약속되어 있음. 
  // readdir은, data 디렉토리에 있는 파일들을 갖고 와서, 그것을 이용해서 파일을 구성. 
  // 현재 data 파일에 HTML이라는 파일 1개 있음. 
  // fs 모듈은 위에서 정의해야 함. 
  //fs.readdir('./html', function(error, filelist){
    //var filteredId = path.parse(request.params.pageId).base; // queryData.id
    fs.readFile(`html/index`, 'utf8', function(err, description){
      var title = "Home Page"; //queryData.id;       
      var html = template.HTML(title, `${description}`);
      response.send(html);
    });
  //});
});

app.get('/womens', function(request, response){   
  var title = "Womens";
  var html, cat, cri, prod;
  fs.readFile(`html/category`, 'utf8', function(err, description){     
    cat = `${description}`;
  });
  fs.readFile(`html/scrub-criteria`, 'utf8', function(err, description){     
    cri = `${description}`;
  });
  fs.readFile(`html/productList`, 'utf8', function(err, description){     
    prod = `${description}`;
    console.log(prod);
  });
  var prodMenu = template.productMenu(cat, cri, prod);
  console.log(prodMenu);
  html = template.HTML(title, prodMenu);
  response.send(html);
});

app.get('/contact', function(request, response){
  response.render("contact.ejs");
});

app.post('/sendMail', function(request, response){
  //doPost(request); // 리턴 받을 수 있으면 좋겠음... 아니면.. 그냥 코드를 넣는 방법도 있고..?
  doPostThank(request);
});
app.post('/thankyou', function(request, response){
  //doPost(request);
  fs.readFile(`html/thankyou`, 'utf8', function(err, description){
    var title = "Contact"; //queryData.id;       
    var html = template.HTML(title, `${description}`);
    response.send(html);
  });
});
/*app.use('https://script.googleusercontent.com/macros/', function(request, response){
  res.redirect('/thankyou');
});
app.post('https://script.google.com/macros/s/AKfycbylR4oEMC1a4lPkGHy5-JLGhe9-6aKFqmpYosNih3dowMHoKW2tkGSZpQsoUKIzP_Ii/exec', function(req, res){
  res.redirect('/thankyou');
});*/
/*
app.get('/contact', function(request, response){ // home으로 들어오면, 여기가 응답되도록 약속되어 있음. 
    //return res.send('Hello World!')
    // readdir은, data 디렉토리에 있는 파일들을 갖고 와서, 그것을 이용해서 파일을 구성. 
    // 현재 data 파일에 HTML이라는 파일 1개 있음.  
    //fs.readdir('./html', function(error, filelist){
      fs.readFile(`html/contact`, 'utf8', function(err, description){
        var title = "Contact";        
        var html = template.HTML(title, `${description}`);
        console.log(`${description}`);
        response.send(html);
        //response.render(html);
      });
    //});
    //response.render(html);
  });*/


  /******************************************************************************
 * This tutorial is based on the work of Martin Hawksey twitter.com/mhawksey  *
 * But has been simplified and cleaned up to make it more beginner friendly   *
 * All credit still goes to Martin and any issues/complaints/questions to me. *
 ******************************************************************************/

// if you want to store your email server-side (hidden), uncomment the next line
var TO_ADDRESS = "squniform@gmail.com";

// spit out all the keys/values from the form in HTML for email
// uses an array of keys if provided or the object to determine field order
function formatMailBody(obj, order) {
  var result = "";
  if (!order) {
    order = Object.keys(obj);
  }
  
  // loop over all keys in the ordered form data
  for (var idx in order) {
    var key = order[idx];
    result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + sanitizeInput(obj[key]) + "</div>";
    // for every key, concatenate an `<h4 />`/`<div />` pairing of the key name and its value, 
    // and append it to the `result` string created at the start.
  }
  return result; // once the looping is done, `result` will be one long string to put in the email body
}

function findCustomerEmailAddress(obj, order) {
  var result = "";
  if (!order) {
    order = Object.keys(obj);
  }
  
  // loop over all keys in the ordered form data
  for (var idx in order) {
    var key = order[idx];
    //result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + sanitizeInput(obj[key]) + "</div>";
    if(key === "CustomerEmail"){
      result = sanitizeInput(obj[key]);
      //document.writeln(key);
      break;
    }
    // for every key, concatenate an `<h4 />`/`<div />` pairing of the key name and its value, 
    // and append it to the `result` string created at the start.
  }
  return result; // once the looping is done, `result` will be one long string to put in the email body
}

// sanitize content from the user - trust no one 
// ref: https://developers.google.com/apps-script/reference/html/html-output#appendUntrusted(String)
function sanitizeInput(rawInput) {
   var placeholder = HtmlService.createHtmlOutput(" ");
   placeholder.appendUntrusted(rawInput);
  
   return placeholder.getContent();
 }

function doPostThank(e) {

  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    record_data(e);
    
    // shorter name for form data
    var mailData = e.parameters;

    // names and order of form elements (if set)
    var orderParameter = e.parameters.formDataNameOrder;
    var dataOrder;
    if (orderParameter) {
      dataOrder = JSON.parse(orderParameter);
    }
    
    // determine recepient of the email
    // if you have your email uncommented above, it uses that `TO_ADDRESS`
    // otherwise, it defaults to the email provided by the form's data attribute
    var sendEmailTo = (typeof TO_ADDRESS !== "undefined") ? TO_ADDRESS : mailData.formGoogleSendEmail;
    
    console.log(dataOrder);

    var customerEmail = findCustomerEmailAddress(mailData, dataOrder);

    // send email if to address is set
    if (sendEmailTo) {
      MailApp.sendEmail({
        to: String(sendEmailTo),
        subject: "Contact form submitted",
        replyTo: String(mailData.email), // This is optional and reliant on your form actually collecting a field named `email`
        htmlBody: formatMailBody(mailData, dataOrder)
      });
      MailApp.sendEmail({
        to: String(customerEmail),
        subject: "Contact form submitted",
        replyTo: String(customerEmail), // This is optional and reliant on your form actually collecting a field named `email`
        htmlBody: formatMailBody(mailData, dataOrder)
      });
    }
    
   /*
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    MailApp.sendEmail(TO_ADDRESS, "Contact Form Submitted",
                      JSON.stringify(e.parameters));
    // return json success results
    */
    
    return ContentService    // return json success results
          .createTextOutput(
            JSON.stringify({"result":"success",
                            "data": JSON.stringify(e.parameters) }))
          .setMimeType(ContentService.MimeType.JSON);
    //return HtmlService.createHtmlOutput('<b>Thank you!</b>');
    //return ContentService.createTextOutput("Thank you!").setMimeType(ContentService.MimeType.TEXT);
    
  } catch(error) { // if error return this
    Logger.log(error);
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": error}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}


/**
 * record_data inserts the data received from the html form submission
 * e is the data received from the POST
 */
function record_data(e) {
  var lock = LockService.getDocumentLock();
  lock.waitLock(30000); // hold off up to 30 sec to avoid concurrent writing
  
  try {
    Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it
    
    // select the 'responses' sheet by default
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = e.parameters.formGoogleSheetName || "responses";
    var sheet = doc.getSheetByName(sheetName);
    
    var oldHeader = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var newHeader = oldHeader.slice();
    var fieldsFromForm = getDataColumns(e.parameters);
    var row = [new Date()]; // first element in the row should always be a timestamp
    
    // loop through the header columns
    for (var i = 1; i < oldHeader.length; i++) { // start at 1 to avoid Timestamp column
      var field = oldHeader[i];
      var output = getFieldFromData(field, e.parameters);
      row.push(output);
      
      // mark as stored by removing from form fields
      var formIndex = fieldsFromForm.indexOf(field);
      if (formIndex > -1) {
        fieldsFromForm.splice(formIndex, 1);
      }
    }
    
    // set any new fields in our form
    for (var i = 0; i < fieldsFromForm.length; i++) {
      var field = fieldsFromForm[i];
      var output = getFieldFromData(field, e.parameters);
      row.push(output);
      newHeader.push(field);
    }
    
    // more efficient to set values as [][] array than individually
    var nextRow = sheet.getLastRow() + 1; // get next row
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

    // update header row with any new data
    if (newHeader.length > oldHeader.length) {
      sheet.getRange(1, 1, 1, newHeader.length).setValues([newHeader]);
    }
  }
  catch(error) {
    Logger.log(error);
  }
  finally {
    lock.releaseLock();
    return;
  }

}

function getDataColumns(data) {
  return Object.keys(data).filter(function(column) {
    return !(column === 'formDataNameOrder' || column === 'formGoogleSheetName' || column === 'formGoogleSendEmail' || column === 'honeypot');
  });
}

function getFieldFromData(field, data) {
  var values = data[field] || '';
  var output = values.join ? values.join(', ') : values;
  return output;
}


app.listen(process.env.PORT || port, () => console.log(`Example app listening`))
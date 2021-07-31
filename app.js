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


//app.use('/', static(path.join(__dirname,'assets')));
//app.use(express.static('assets'));
//app.use('/contact', static(path.join(__dirname,'assets')));

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

/*app.get('/contact', function(request, response){
  response.render("contact.html");
});*/
app.get('/contact', function(request, response){ // home으로 들어오면, 여기가 응답되도록 약속되어 있음. 
    //return res.send('Hello World!')
    // readdir은, data 디렉토리에 있는 파일들을 갖고 와서, 그것을 이용해서 파일을 구성. 
    // 현재 data 파일에 HTML이라는 파일 1개 있음.  
    //fs.readdir('./html', function(error, filelist){
      //var filteredId = path.parse(request.params.pageId).base; // queryData.id
      fs.readFile(`html/contact`, 'utf8', function(err, description){
        var title = "Contact";        
        var html = template.HTML(title, `${description}`);
        console.log(`${description}`);
        response.send(html);
        //response.render(html);
      });
    //});
    //response.render(html);
  });

app.listen(process.env.PORT || port, () => console.log(`Example app listening`))
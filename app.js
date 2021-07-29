const express = require('express')
const app = express()
const port = 3000
var fs = require('fs'); 
var http = require('http');
var static = require('serve-static');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');

app.use('/', static(path.join(__dirname,'assets')));

app.get('/contact', function(request, response){ // home으로 들어오면, 여기가 응답되도록 약속되어 있음. 
    //return res.send('Hello World!')
    // readdir은, data 디렉토리에 있는 파일들을 갖고 와서, 그것을 이용해서 파일을 구성. 
    // 현재 data 파일에 HTML이라는 파일 1개 있음. 
    // fs 모듈은 위에서 정의해야 함. 
    fs.readdir('./html', function(error, filelist){
      //var filteredId = path.parse(request.params.pageId).base; // queryData.id
      fs.readFile(`html/contact`, 'utf8', function(err, description){
        var title = "Contact"; //queryData.id;       
        var html = template.HTML(title, `${description}`);
        response.send(html);
      });
    });
  });
app.listen(process.env.PORT || port, () => console.log(`Example app listening`))
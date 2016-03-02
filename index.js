var dotenv = require('dotenv').config();
var http = require('http')
var url = require('url')
var sanitize = require('sanitize-caja')
var multer  = require('multer')
var express = require('express')
var app = express()
var upload = multer()

app.use(express.static('public'))

app.post('/upload', upload.single('myfile'), function(req, res, next){
  res.contentType('json')
  res.end(JSON.stringify({"size": req.file.size}));
});


var server = app.listen(process.env.PORT || 8888, function (req, res) {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});

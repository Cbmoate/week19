var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var PORT = process.env.PORT || 9001;

var mongoose = require('mongoose');

app.get('/', function(req, res) {
    res.send("hello world");
});

app.listen(PORT, function(){
  console.log("Goliath online port", PORT);
});
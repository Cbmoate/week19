var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var db = 'mongodb://localhost/buyAndSell';
mongoose.connect(db);

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var User = require('./models/user');
var Comment = require('./models/comment');
var Item = require('./models/item')

app.get('/', function(req, res) {
    res.send(index.html);
});

var PORT = process.env.PORT || 9001;
app.listen(PORT, function(){
  console.log("Goliath online port", PORT);
});
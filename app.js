var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes');
var app = express();

var configDB = require('./config/database');
mongoose.connect(configDB.url);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use('/',require('./routes'));


app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});

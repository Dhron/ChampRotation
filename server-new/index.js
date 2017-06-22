var express = require('express');
var app = express(); //instance of express
var routes = require('./routes'); //our routes

app.use('/', routes); 

app.listen(3000, () => {
  console.log('App listening on port 3000');
});



var express = require('express');
var app = express(); //instance of express
var routes = require('./routes'); //our routes

var morgan = require('morgan')

//For logging
app.use(morgan('tiny'))

//API Endpoints
app.use('/', routes); 

//Server
app.listen(3001, () => {
  console.log('App listening on port 3000');
});



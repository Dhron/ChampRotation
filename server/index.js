var express = require('express');
var app = express(); //instance of express
var routes = require('./routes'); //our routes
var config = require('./config'); //our config

var morgan = require('morgan')

//For logging
app.use(morgan('tiny'))

//API Endpoints
app.use('/', routes); 

var port = config.port;

//Server
app.listen(port, () => {
  console.log('App listening on port '+ port);
});



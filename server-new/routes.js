var riot = require('./functions');
var config = require('./config');

const routes = require('express').Router();

//API Functions

var getSummonerData = function (req, res) {
    var data = req.body;
    var champList = riot.champs(req, res);
    res.send(champList);
}

var getPros = function (req, res) {

    res.send(data);
}







// API ENDPOINTS

////////////////////////////////////////

routes.get('/', getSummonerData);
routes.get('/pros', getPros);
////////////////////////////////////////

module.exports = routes;

var riot = require('./functions');
var config = require('./config');

const routes = require('express').Router();

//API Functions

var getSummonerData = function(req, res) {
    riot.champs().then((data) => {
        var champList = data;
        res.send(champList);
        return;
    }).catch((reason) => {
        this.body = reason;
        this.status = 400;
    });
}

var getPros = function (req, res) {
    data = riot.champs(req, res);
    console.log(data);
    res.send(data);
}

// API ENDPOINTS

////////////////////////////////////////

routes.get('/', getSummonerData);
routes.get('/pros', getPros);
////////////////////////////////////////

module.exports = routes;

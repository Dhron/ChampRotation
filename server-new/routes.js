var riot = require('./functions');
var config = require('./config');

var LogRoutes = require('express-log-routes');
var logRoutes = new LogRoutes();

const routes = require('express').Router();


//API Functions

var getFreeChamps = function(req, res) {
    riot.freeChamps().then((data) => {
        var champList = data;
        res.send(champList).status(200);
        return;
    }).catch((reason) => {
        this.body = reason;
        this.status = 400;
    });
}

var getChampData = function(req, res) {
	riot.allChamps().then((data) => {
		var champData = data;
		res.send(champData).status(200);
		return;
	}).catch((reason) => {
		this.body = reason;
		this.status = 400;
	});

}

var getPros = function (req, res) {
    res.send("hello").status(200);
}

// API ENDPOINTS

////////////////////////////////////////


routes.get('/free', getFreeChamps);
routes.get('/champs', getChampData);
routes.get('/pros', getPros);

////////////////////////////////////////

logRoutes({
  router: routes,
  baseUri: 'localhost:3000' // <-- you can also override initial configurations 
});

module.exports = routes;

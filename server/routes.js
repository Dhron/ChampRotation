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

var getChampURL = function (req, res) {
    var champNames = req.headers.champs; //maybe? need to check
    riot.champURLS(champNames).then((data) => {
       var urls = data;
       res.send(urls).status(200);
       return;
    }).catch((reason) => {
        this.body = reason;
        this.status = 400;
    });
}

// API ENDPOINTS

////////////////////////////////////////


routes.get('/free', getFreeChamps);
routes.get('/champs', getChampData);
//routes.get('/pros', getPros);
routes.get('/urls', getChampURL);

////////////////////////////////////////

logRoutes({
  router: routes,
  baseUri: config.host + ':' + config.port; 
});

module.exports = routes;

//for making API calls
var request = require('request');
var config = require('./config');

var functions = {};

functions.freeChamps = function() { 
return new Promise( function(resolve, reject) {
        request(config.riot.freeChampions, function (err, response, body) {
            if (!err && response.statusCode === 200){
                var champData = JSON.parse(body);
                data = champData;
                resolve(data);
            }
            else {
                reject(err);
            }
        });
    });
}

functions.allChamps = function() {
return new Promise( function(resolve, reject) {
		request(config.riot.champData, function (err, response, body) {
			if(!err && response.statusCode === 200) {
				var staticData = JSON.parse(body);
				data = staticData;
				resolve(data);
			}
			else {
				reject(err);
			}
		});
	});
}

functions.populateDB = function() {
	//want to populate champions collection
	//with image url, champID, champ name etc.	
}


///////////////////////////////////
module.exports = functions;

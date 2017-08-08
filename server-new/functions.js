//for making API calls
var request = require('request');
var config = require('./config');

//require our schema
var Champion = require('./models/Champions');

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

functions.champURLS = function(names) {
var urls = [];
return new Promise( function(resolve, reject){
        for(name in names) {
            //perform database query and add url to urls[]
            var filter = { 'name' : names[name] };
            console.log(filter);
            Champion.findOne(filter, function (err, champ) {
                if(err) { reject(err); }
                else{
                    console.log(champ);
                    urls.push(champ.splashURL);
                    console.log(urls);
                }
            });
        }
        resolve(urls);
    });
}

functions.updateChamp = function(filter, update) {
    var dbFilter = filter;
    var dbUpdate = update;
    //to do, make general update function
    //and loop through and update champ urls for all champs    
}

//TEST
//functions.champURLS(["Annie", "Fiora"]);

/* DO NOT RUN
functions.populateDB = function(){
    functions.allChamps().then((data) => {
    var result = data.data;
    for(var key in result){
        var apiChamp = result[`${key}`];
        var champ = new Champion({
            id: apiChamp.id,
            name: apiChamp.name,
            splashURL: "www.champrotation.com/assets/img/" + apiChamp.name + ".jpg",
            champType: apiChamp.tags
        });              
        champ.save((err) => {
            if(err) {
                throw err;
            }
            console.log(champ.name + ' saved successfully in the database!');
        });
    } 
  });
}

functions.populateDB();
*/

///////////////////////////////////

module.exports = functions;

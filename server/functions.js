//for making API calls
var request = require('request');
var config = require('./config');

//require our schema
var Champion = require('./models/Champions');

var functions = {};

//Retrieves free champs from the db
//Gives all champ description data
functions.dbFreeChamps = function(champs) {
    var freeChamps = [];

    return new Promise(function(resolve, reject) {
        var champPromises = champs.map((champ) => {
        var filter = {'id': champ.id };
        var query = Champion.findOne(filter);
        return query.then((dbChamp) => {
            freeChamps.push(dbChamp);
        });
    });

    Promise.all(champPromises).then(function(){
        resolve(freeChamps);
    });
});

}

//Wrapper function for functions.dbFreeChamps
functions.freeChamps = function() { 
return new Promise( function(resolve, reject) {
    request(config.riot.freeChampions, function (err, response, body) {
            if (!err && response.statusCode === 200){
                var champData = JSON.parse(body);
                data = champData;
                var ret = functions.dbFreeChamps(data.champions);
                resolve(ret);
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

//Needs to be written as an array of promises
//and then resolved at the end
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
                    urls.push(champ.splashURL);
                }
            });
        }
        resolve(urls);
    });
}

/*
functions.updateChamp = function(filter, update) {
    var dbFilter = filter;
    var dbUpdate = update;
    //to do, make general update function
    //and loop through and update champ urls for all champs    
}*/

//TEST
//functions.champURLS(["Annie", "Fiora"]);
/*
functions.populateDB = function(){
    functions.allChamps().then((data) => {
    var result = data.data;
    for(var key in result){
        var apiChamp = result[`${key}`];
        var champ = new Champion({
            id: apiChamp.id,
            name: apiChamp.name,
            title: apiChamp.title,
            splashURL: "www.champrotation.com/assets/img/" + apiChamp.name + ".jpg",
            champType: apiChamp.tags,
            desc: apiChamp.blurb
        });              
        champ.save((err) => {
            if(err) {
                throw err;
            }
        console.log(champ);
        console.log(champ.name + ' saved successfully in the database!');
        });
    } 
  });
}

functions.populateDB();
*/

///////////////////////////////////

module.exports = functions;

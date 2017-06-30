//For making asyc requests
var async = require('async');
var request = require('request');

var config = require('./config');
var functions = {};

functions.champs = function() { 
return new Promise( function(resolve, reject) {
        request(config.riot.champions, function (err, response, body) {
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


///////////////////////////////////
module.exports = functions;

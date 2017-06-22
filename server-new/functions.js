//For making asyc requests
var async = require('async');
var request = require('request');

var config = require('./config');
var functions = {};

functions.champs = function (req, res) {
 return new Promise(function(resolve, reject) {
          async.waterfall([
            function(callback){
                request(config.riot.champions, function (err, response, body) {
                    if (!err && response.statusCode === 200){
                    var champData = JSON.parse(body);
                    data = champData;
                    callback(null,data);
                    }
                    else {
                        console.log(err);
                    }
                });
            }
        ],
        function(err,data)  {
          if (err){
            reject(err);
          }
            console.log(data);
            resolve(data);    
        });
    });      
}


///////////////////////////////////
module.exports = functions;

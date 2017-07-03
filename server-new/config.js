var config = {};
var api = require('./api');

//db information
config.mongodb = {};
config.mongodb.host = 'localhost';
config.mongodb.port = 27017;
config.mongodb.sysdb = 'summonerDB';


//Riot API Calls
config.riot = {};
config.riot.champions = 'https://na1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=true' + '&api_key=' + api.key;

////////////////////////////////////////////

module.exports = config;

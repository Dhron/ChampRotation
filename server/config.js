var config = {};
var api = require('./api');

//host information
config.host = 'localhost';
config.port = '3001';

//db information
config.mongodb = {};
config.mongodb.host = 'localhost';
config.mongodb.port = 27017;
config.mongodb.sysdb = 'champsDB';


//Riot API Calls
config.riot = {};
config.riot.freeChampions = 'https://na1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=true' + '&api_key=' + api.key;
config.riot.champData = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=blurb&tags=tags&dataById=true' + '&api_key=' + api.key;

////////////////////////////////////////////

module.exports = config;

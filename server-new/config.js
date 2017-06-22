var config = {}

//db information
config.mongodb = {};
config.mongodb.host = 'localhost';
config.mongodb.port = 27017;
config.mongodb.sysdb = 'summonerDB';

// include Riot API
config.riot = {};
config.riot.apiKey ='RGAPI-849afe92-8a88-4c94-811b-b84b51a032c9';

//Riot API Calls
config.riot.champions = 'https://na1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=true' + '&api_key=' + config.riot.apiKey;


////////////////////////////////////////////


module.exports = config;

import { Meteor } from 'meteor/meteor';
import { request } from '../node_modules/request'
var key = "67f7ded4-7cbb-4957-921d-bb28a5b874bb"
	Meteor.startup(() => {
	  // code to run on server at startup
	  var request = require('request');
	  request('https://na.api.riotgames.com/api/lol/NA/v1.2/champion?freeToPlay=true&api_key=' + key, function (error, response, body) {
	  console.log('error:', error); 
	  console.log('statusCode:', response && response.statusCode);  
	  console.log('body:', body);
});

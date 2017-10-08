var request = require('request');

//our backend host
var API_HOST = 'localhost:3000';

//Function for returning free champ data from backend
var freeChampData = function(){
	var url = API_HOST + '/free';
	//Want to return a list to my react component
	request(url, function(req, res){
		return 0;
	});
}
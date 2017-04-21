//include express
var express = require ('express');
var app = express();

var async= require('async');
var request = require('request');

// include Riot Api
var key ='RGAPI-849afe92-8a88-4c94-811b-b84b51a032c9';
var data={};
var testData={};
// need to require our own db interface file

//get champions (enter manually)
app.get('/update',function(req,res){
  var str ='https://na1.api.riotgames.com/lol/static-data/v3/champions?api_key='+key;

//honestly i dont really understand this that well
async.waterfall([
  function(callback){
  request(str,function(err,response,body){
    //if request worked correctylu
    if (!err && response.statusCode=== 200){
      //store the returned data into a variable
     var json =JSON.parse(body);
     data=json;
     callback(null,data);
    }
    else {
        console.log(err);
    }
  });
}
],function(err,data)  {
  if (err){
    console.log(err);
    return;
  }


// this is only temporary to show data for testing

for( var x in data["data"]){

testData.id =data["data"][x].id ;//id;
testData.name=data['data'][x].name;

console.log(testData);}




  res.send(data);
    //instead call a funtion that inserts the data into a db

});
});



//connecting to server
var server = app.listen (8080,function(){
  var host = server.address().address
  var port =server.address().port
  console.log("listening at http://%s:%s",host,port);
});

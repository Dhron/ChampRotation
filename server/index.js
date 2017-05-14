//include express
var express = require ('express');

var app = express();
var async= require('async');
var request = require('request');
var assert =require('assert');
var MongoClient = require('mongodb').MongoClient;

var host='localhost:27017'
var dbname='testDB';

// include Riot Api
var key ='RGAPI-849afe92-8a88-4c94-811b-b84b51a032c9';
var data={};
var testData={};

function insertChamp (db,champ,callback){
    db.collection('champions').insertOne({
      "id": champ.id,
      "name":champ.name,
      "image":champ.name+'.jpeg'
    },function (err,result){
      assert.equal(err, null);
      console.log("Inserted a document into collection.");
      callback();
    })
}

function addChamps (data){
  MongoClient.connect("mongodb://"+ host +"/" +dbname , function(err, db) {
assert.equal(null,err);
    for( var x in data["data"]){
      testData.id =data["data"][x].id ;//id;
      testData.name=data['data'][x].name;
      insertChamp(db,testData, function (){
        db.close();
      })}

  });}

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
  res.send(data);
  addChamps(data);
    //instead call a funtion that inserts the data into a db
});
});




//example of getting user info
// /summoner can be replaced with whatever the form action is
app.get('/summoner',function (req,res) {

  //var name =req.query.summonerName; //can be replaced with name of input
 var name='wood4life';//get name from html box
var str='https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+ name + '?api_key='+key;

async.waterfall([
  function(callback){
  request(str, function (error,response,body) {
    if (!err && response.statusCode=== 200){
      //store the returned data into a variable
     var json =JSON.parse(body);
     data=json;
     callback(null,data);
    }
    else {
        console.log(err);
    }
  }
}],function(err,data){
  if (err){
    console.log(err);
    return;
  }
  //res.send(data); //
var masteryData ={};
  getChampMastery(data.id);

  //this call gives u summoner id, need to call a function for requesting champ mastery
})

});
//this funtion will get top 5 mastery champs for a summoner havent tested it yet
function getChampMastery(summoner){
  aysnc.waterfall([
    function(callback){
    request(str, function (error,response,body) {
      if (!err && response.statusCode=== 200){
        //store the returned data into a variable
       var json =JSON.parse(body);
       masteryData=json;
       callback(null,data);
      }
      else {
          console.log(err);
      }
    }
  }
  ],function (err,data){
    if (err){
      console.log(err);
      return ;
    }
      //return json data
      return masteryData;

  })
}
//function to get pro champs
app.get('/getPros',function(req,res){
  // call the other functions
});

//connecting to server
var server = app.listen (8080,function(){
  var host = server.address().address
  var port =server.address().port
  console.log("listening at http://%s:%s",host,port);
});

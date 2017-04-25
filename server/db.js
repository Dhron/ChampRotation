//query the api every week using scheduler and store in db
//then website query db for champs
//create a mapping table with name and champ id to store incase needed.


// Retrieve
var MongoClient = require('mongodb').MongoClient;

var host='localhost:3000'
var dbname=testDB;
// Connect to the db
MongoClient.connect("mongodb://"+ host +"/" +dbname , function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
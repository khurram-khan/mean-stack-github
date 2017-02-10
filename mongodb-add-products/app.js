var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
const db = require('./db/db');
var app = express();
var port = 5000;
/*const id = monk.id('4ee0fd75d6bd52107c000118')*/
/*var crypto = require('crypto');	
var mime = require('mime');	*/

app.use(express.static(__dirname + '/public'));
app.use("/public" ,express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

var router = require('./routes/routes-control');
app.use(router);

//Database Connection
db.checkDb();

app.listen(port, function(){
  console.log("This server is working on port: " + port );
});
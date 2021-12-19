// Requiring the express Module
const express = require('express');

// Calling the express function
const app = express();

// Requiring the bodyParser Module
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// Requiring the request Module
const request = require('request');

// To use Static Files (Like local Css, local images) we have to use express static function
app.use(express.static("public"));

// If the browser made any get request on this route send this message
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// Port is Set up And app is listening on port:3000
app.listen(3000, function() {
  console.log(`App listening at http://localhost:${3000}`);
});

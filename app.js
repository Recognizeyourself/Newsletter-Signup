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

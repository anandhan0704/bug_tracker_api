'use strict';

let fs = require('fs');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

// Let's create the regular HTTP request and response
app.get('/', function(req, res) {

  console.log('Get index');
  return res.json({
    answer: 34
  });
});

app.post('/', function(req, res) {

  let message = req.body.message;
  console.log('Regular POST message: ', message);
  return res.json({

    answer: message
  });
});

module.exports = app;
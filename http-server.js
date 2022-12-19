'use strict';

let fs = require('fs');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
let WSServer = require('ws').Server;
let server = require('http').createServer();
require('dotenv').config();

// Let's create the regular HTTP request and response
app.get('/', function(req, res) {
  console.log('Get index');
  fs.createReadStream('./index.html')
  .pipe(res);
});

app.post('/', function(req, res) {
  let message = req.body.message;
  console.log('Regular POST message: ', message);
  return res.json({
    answer: 42
  });
});

let wss = new WSServer({

  server: server
});

wss.on('connection', function connection(ws) {
 
  ws.on('message', function incoming(message) {
    
    console.log(`received: ${message}`);
    ws.send(JSON.stringify({
      answer: 42
    }));
  });
});

app.listen(process.env.PORT, function() {
  console.log(`http/ws server listening on ${process.env.PORT}`);
});




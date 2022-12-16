const WebSocket = require('ws');
var port = 8080;
const wss = new WebSocket.Server({ "port": port });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if ( client.readyState == WebSocket.OPEN && data != undefined ) 
      client.send(data);
  });
};

wss.on('connection', function connection(ws) {
  console.log("CONNECTION OK...");
  ws.on('message', function incoming(data) {
    // Broadcast to everyone else.
    console.log(data.toString())
    wss.broadcast(data);
  });
});

console.log((new Date()) + ' Server is listening on port 8080');
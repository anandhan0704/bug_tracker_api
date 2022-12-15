const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
    ws.send(`Received message => ${message}`)
  })
  ws.onmessage = (message) => {
    console.log(message);
  };

  ws.addEventListener("open", (message) => {
        console.log("We are connected");
        ws.emit('message',message);
      });
})

console.log("Server connected on 8080")
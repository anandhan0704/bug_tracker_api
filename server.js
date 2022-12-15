const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 4000 })
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  ws.onmessage = (message) => {
    console.log(message);
  };
  ws.send("message", message)
})
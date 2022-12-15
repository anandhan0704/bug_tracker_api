const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  ws.onmessage = (message) => {
    console.log(message);
  };
  ws.send('Hello! Message From WS!!')
})

console.log("Server connected on 8080")
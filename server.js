// Importing the required modules
const WebSocketServer = require('ws');

// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 8080 })
// Creating connection using websocket
wss.on("connection", (ws) => {
  console.log("new client connected");
  // sending message
  ws.on("message", data => {
    console.log(`Client has sent us: ${data}`)
  });
  // handling what to do when clients disconnects from server
  ws.on("close", () => {
    console.log("the client has connected");
  });

  let planData = { "planId": "18" }
  ws.send("message", (planData) => {
    console.log("*** MESSAGE ***" + planData);
  });

  // eventEmitter.on(inputData.id, outputMessage => {
  //   if (ws.readyState === ws.OPEN) {
  //     ws.send(outputMessage)
  //   } else {
  //     eventEmitter.removeAllListeners([inputData.id])  // remove all listeners registered with this ID.
  //     ws.terminate()
  //   }
  // })

  ws.send(JSON.stringify(planData));

  // handling client connection error
  ws.onerror = function () {
    console.log("Some Error occurred")
  }
});

console.log("The WebSocket server is running on port 8080");
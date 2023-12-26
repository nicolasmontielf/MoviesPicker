import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";

const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log("Someone connected")
});
  
httpServer.listen(3000);

app.get('/', (req, res) => {
    return res.send('Hello World!')
})
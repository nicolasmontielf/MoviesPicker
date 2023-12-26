import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv'
import SocketEventsHandler from '@/socket';

dotenv.config()

const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    // Handle socket connection
    const query = socket.handshake.query;
    if (!query?.room) {
        console.log("disconnected");
        return socket.disconnect();
    }
    socket.join(query.room);

    // Handle socket events
    SocketEventsHandler(socket)
});

httpServer.listen(3000);

app.get('/', (req, res) => {
    return res.send('Hello World!')
})
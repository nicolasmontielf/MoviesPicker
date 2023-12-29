import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv'
import SocketEventsHandler from '@/socket';
import router from '@/router';
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

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

httpServer.listen(process.env.PORT || 3000);
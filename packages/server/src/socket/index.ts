import type { Socket } from 'socket.io';

export default function (socket: Socket) {
    socket
    .on('voted', async (args) => {
        console.log("voted event", args);
    })
    .on("get-movies", async (args) => {
        console.log("get-movies event", args);
    })
}
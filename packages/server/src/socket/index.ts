import type { Socket } from 'socket.io';

export default function (socket: Socket) {
    socket
    .on('voted', async (args) => {
        console.log("voted event", args);
    })
    .on("getMoreMovies", async (args) => {
        console.log("getMoreMovies event", args);
    })
}
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";

export default class {
    private socket: Socket;
    private roomId: string;

    constructor(roomId: string) {
        this.socket = io(import.meta.env.VITE_SOCKET_URL + `?room=${roomId}`);
        this.roomId = roomId;
    }

    private getSocket(): Socket {
        return this.socket;
    }

    public getMovies(genres: string): void {
        this.getSocket().emit("get-movies", { roomId: this.roomId, genres });
    }

    public vote(roomId: string, movieId: number, approved: boolean): void {
        this.getSocket().emit("vote", roomId, movieId, approved);
    }
}
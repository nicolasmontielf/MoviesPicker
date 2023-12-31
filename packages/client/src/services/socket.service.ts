import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import type { MoviesEvent } from '@movies/common/types';

export default class {
    private socket: Socket;
    private roomId: string;
    public movies: any[] = [];
    public page: number = 1;

    constructor(roomId: string): void {
        this.roomId = roomId;
    }

    /** Start the socket and register the listeners */
    public start(): void {
        this.socket = io(import.meta.env.VITE_SOCKET_URL + `?room=${this.roomId}`);

        // We receive the movies from the server
        this.socket.on<MoviesEvent>("movies", (movies, page) => {
            this.movies = movies;
            this.page = page;
        });
    }

    private getSocket(): Socket {
        return this.socket;
    }
    
    /** Emit the "get-movies" event to the server. This will return us the "movies" event */
    public getMovies(genres: string): void {
        this.getSocket()
            .emit("get-movies", { roomId: this.roomId, genres });
    }

    /** Emit the "vote" event to the server. This happens where the user votes */
    public vote(movieId: number, approved: boolean): void {
        this.getSocket()
            .emit("vote", { roomId: this.roomId, movieId, approved });
    }
}
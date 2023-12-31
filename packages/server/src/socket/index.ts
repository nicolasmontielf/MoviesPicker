import type { Socket, Server } from 'socket.io';
import { getMovies } from '@/services/movies.service';
import type { GetMoviesEvent, VoteEvent } from '@movies/common/types';

export default function (socket: Socket, io: Server) {
    socket.on('voted', async (args: VoteEvent) => {
        console.log("voted event", args);
    })

    .on("get-movies", async (args: GetMoviesEvent) => {
        const movies = await getMovies({
            with_genres: args.genres.replaceAll(',', '|'),
            page: args?.page ?? 1
        })

        // Emit to all sockets in the room
        io.to(args.roomId)
            .emit("movies", movies.results, movies.page);
    })
}
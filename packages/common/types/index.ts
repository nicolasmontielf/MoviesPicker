export interface GenreItemResponse {
    id: number;
    name: string;
}

// Response from TMDB API
export interface GenreResponse {
    genres: GenreItemResponse[]
}

// Response from our API
export interface GenreApiResponse {
    data: GenreItemResponse[]
}

export type Genre = GenreItemResponse

// Filters to be sent to TMDB API
export interface GetMoviesFilters {
    page?: number
    sort_by?: string
    with_genres?: string
    year?: number
}

export interface Room {
    id: string
    genres: string
    expiration: number
}

// Movie response from TMDB API
export interface MovieResponse {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export interface Movie {
    adult: boolean
    backdrop_path: sting
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

/** Socket events */
export interface GetMoviesEvent {
    roomId: string,
    genres: string,
    page: number
}

export interface VoteEvent {
    roomId: string,
    movieId: number,
    approved: boolean
}

export interface MoviesEvent {
    results: Movie[],
    page: number
}
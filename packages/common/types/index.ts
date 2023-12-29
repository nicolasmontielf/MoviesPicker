export interface GenreItemResponse {
    id: number;
    name: string;
}

export interface GenreResponse {
    genres: GenreItemResponse[]
}

export interface GenreApiResponse {
    data: GenreItemResponse[]
}

export type Genre = GenreItemResponse

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
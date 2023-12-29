export interface GenreItemResponse {
    id: number;
    name: string;
}

export interface GenreResponse {
    genres: GenreItemResponse[]
}
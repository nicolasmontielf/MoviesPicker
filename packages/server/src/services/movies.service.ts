import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { GenreResponse, GenreItemResponse, GetMoviesFilters, MovieResponse } from '@movies/common/types'

function getInstance(): AxiosInstance {
    return axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        timeout: 5000,
        headers: {
            'Authorization': `Bearer ${process.env.TMDB_API_KEY}`
        }
    })
}
 
export async function getGenres(): Promise<GenreItemResponse[]> {
    const instance = getInstance()
    const { data } = await instance.get<GenreResponse>('/genre/movie/list')
    return data.genres;
}

export async function getMovies(filters?: GetMoviesFilters): Promise<MovieResponse> {
    const instance = getInstance()
    const { data } = await instance.get<MovieResponse>('/discover/movie', {
        params: filters
    })

    return data;
}
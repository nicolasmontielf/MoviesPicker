import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { GenreApiResponse, Genre } from '@movies/common/types';

function getInstance(): AxiosInstance {
    return axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function getGenres(): Promise<Genre[]> {
    const instance = getInstance();
    const { data } = await instance.get<GenreApiResponse>('/genres');
    return data.data;
}
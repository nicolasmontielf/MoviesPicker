import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { GenreApiResponse } from '@movies/common/types/api';

function getInstance(): AxiosInstance {
    return axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function getGenres(): Promise<GenreApiResponse> {
    const instance = getInstance();
    const { data } = await instance.get('/genres');
    return data.data;
}
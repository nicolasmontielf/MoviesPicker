import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { GenreApiResponse, Genre, Room } from '@movies/common/types';

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

export async function createRoom(genres: string): Promise<Room> {
    const instance = getInstance();
    
    const { data } = await instance.post<{ data: Room }>('/rooms/create', {
        genres
    });

    return data.data;
}
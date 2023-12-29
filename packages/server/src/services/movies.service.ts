import axios from 'axios'

function getInstance() {
    return axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        timeout: 5000,
        headers: {
            'Authorization': `Bearer ${process.env.TMDB_API_KEY}`
        }
    })
}
 
export async function getGenres() {
    const instance = getInstance()
    return await instance.get('/genre/movie/list')
}

export async function getMovies(filters: any) {
    const instance = getInstance()
    return await instance.get('/discover/movie', {
        params: filters
    })
}
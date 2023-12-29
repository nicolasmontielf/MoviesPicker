import { createRoom } from '@/services/database.service'
import { getGenres } from '@/services/movies.service'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({ hello: 'world' })
})

router.get('/genres', async (req, res) => {
    const genres = await getGenres()
    return res.send({
        data: genres
    })
})

router.post('/rooms/create', async (req, res) => {
    const room = await createRoom(req.body)
    return res.send({
        data: room
    })
})

export default router;
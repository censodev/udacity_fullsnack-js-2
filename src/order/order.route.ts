import express from 'express'

const secretKey = process.env.JWT_SECRET
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Birds home page')
})
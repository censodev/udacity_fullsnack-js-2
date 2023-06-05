import express from 'express'
import AuthService from './AuthService'

const router = express.Router()
const authService = AuthService()

router.post('/register', async (req, res) => {
    const { body } = req
    const user = await authService.register(body)
    res.json({
        message: user ? 'OK' : 'Failed',
        data: user
    })
})

router.post('/login', async (req, res) => {
    const { body } = req
    const token = await authService.login(body.username, body.password)
    res.json({
        message: token ? 'OK' : 'Failed',
        token
    })
})

export default router
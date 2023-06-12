import express from 'express'
import authMiddleware from '../auth/auth.middleware'
import AuthService from '../auth/AuthService'
import UserRepo from './UserRepo'

const router = express.Router()
const userRepo = UserRepo()
const authService = AuthService()

router.get('/', authMiddleware, async (req, res) => {
    res.json(await userRepo.findMany())
})


router.get('/:uid', authMiddleware, async (req, res) => {
    res.json(await userRepo.find(+req.params.uid))

})

router.post('/', authMiddleware, async (req, res) => {
    const { body } = req
    const rs = await authService.register(body)
    res.json(rs ?? {
        message: 'created failed'
    })
})

export default router
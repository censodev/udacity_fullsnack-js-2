import express from 'express'
import authMiddleware from '../auth/auth.middleware'
import AuthService from '../auth/AuthService'
import { User } from '@prisma/client'
import { JwtPayload } from 'jsonwebtoken'
import OrderRepo from './OrderRepo'

const router = express.Router()
const orderRepo = OrderRepo()
const authService = AuthService()

router.post('/', authMiddleware, (req, res) => {
    const { id: uid } = authService.extractUserInfo(req)
    const { body } = req
    body.status = 'CREATED'
    body.userId = uid
    res.json(orderRepo.create(body))
})


router.get('/me', authMiddleware, async (req, res) => {
    const { id: uid } = authService.extractUserInfo(req)
    res.json(await orderRepo.findByUserId(uid))
})

export default router
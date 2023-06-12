import express from 'express'
import AuthService from './AuthService'

export default function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const authService = AuthService()
    const token = authService.extractToken(req)
    if (!authService.verify(token)) {
        res.status(401)
        res.json({
            message: 'Request is not authorized'
        })
    }
    next()
}
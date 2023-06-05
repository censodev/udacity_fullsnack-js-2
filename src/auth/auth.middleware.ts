import express from 'express'

export default function authGuard(req: express.Request, res: express.Response, next: express.NextFunction) {
    
    next()
}
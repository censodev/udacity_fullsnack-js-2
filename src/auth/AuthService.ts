import UserRepo, { User } from "../user/UserRepo";
import TokenProvider from "./TokenProvider";
import bcrypt from 'bcrypt';
import express from 'express'
import { JwtPayload } from "jsonwebtoken";
import configs from "../configs";

export default function AuthService() {
    const tokenProvider = TokenProvider(configs.JWT_SECRET)
    const userRepo = UserRepo()

    const register = async (model: User): Promise<User | undefined> => {
        const user = await userRepo.findByUsername(model.username)
        if (user !== null)
            return undefined
        const salt = await bcrypt.genSalt()
        const password = await bcrypt.hash(model.password, salt)
        return await userRepo.create({
            ...model,
            password: password,
        })
    }

    const login = async (username: string, password: string): Promise<string | null> => {
        const user = await userRepo.findByUsername(username)
        if (user === null)
            return null
        const valid = await bcrypt.compare(password, user.password)
        if (valid)
            return tokenProvider.generate(user)
        return null
    }

    const verify = (token: string) => {
        return tokenProvider.verify(token)
    }

    const userInfo = (token: string): JwtPayload => {
        return tokenProvider.payload(token) as JwtPayload
    }

    const extractToken = (req: express.Request): string => {
        return (req.headers.authorization ?? '').replace('Bearer ', '')
    }

    const extractUserInfo = (req: express.Request): JwtPayload => {
        const token = extractToken(req)
        return userInfo(token)
    }

    return {
        register,
        login,
        verify,
        userInfo,
        extractToken,
        extractUserInfo,
    }
}
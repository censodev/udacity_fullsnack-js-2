import { Prisma, User } from "@prisma/client";
import UserRepo from "../user/UserRepo";
import TokenProvider from "./TokenProvider";
import bcrypt from 'bcrypt';

export default function AuthService() {
    const tokenProvider = TokenProvider(process.env.JWT_SECRET ?? '')
    const userRepo = UserRepo()

    const register = async (model: Prisma.UserCreateInput): Promise<User | null> => {
        const user = await userRepo.findByUsername(model.username)
        if (user !== null)
            return null
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

    const userInfo = (token: string) => {
        return tokenProvider.payload(token)
    }

    return {
        register,
        login,
        userInfo,
    }
}
import { User, Prisma, PrismaClient } from "@prisma/client";

export default function UserRepo() {
    const prisma = new PrismaClient()

    async function create(model: Prisma.UserCreateInput) {
        return await prisma.user.create({
            data: model,
        })
    }

    async function findMany(): Promise<User[]> {
        return await prisma.user.findMany()
    }

    async function find(id: number): Promise<User | null> {
        return await prisma.user.findFirst({
            where: {
                id: {
                    equals: id,
                }
            }
        })
    }

    async function update(id: number, model: Prisma.UserUpdateInput) {
        return await prisma.user.update({
            where: {
                id: id,
            },
            data: model,
        })
    }

    async function deleteOne(id: number): Promise<User | never> {
        return await prisma.user.delete({
            where: {
                id: id,
            },
        })
    }

    async function findByUsername(username: string): Promise<User | null> {
        return await prisma.user.findFirst({
            where: {
                username: {
                    equals: username,
                }
            }
        })
    }

    return {
        create,
        findMany,
        find,
        update,
        deleteOne,
        findByUsername,
    }
}
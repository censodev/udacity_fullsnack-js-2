import { Product, Prisma, PrismaClient } from "@prisma/client";

export default () => {
    const prisma = new PrismaClient()

    async function create(model: Prisma.ProductCreateInput) {
        return await prisma.product.create({
            data: model,
        })
    }

    async function findMany(): Promise<Product[]> {
        return await prisma.product.findMany()
    }

    async function find(id: number): Promise<Product | null> {
        return await prisma.product.findFirst({
            where: {
                id: {
                    equals: id,
                }
            }
        })
    }

    async function update(id: number, model: Prisma.ProductUpdateInput) {
        return await prisma.product.update({
            where: {
                id: id,
            },
            data: model,
        })
    }

    async function deleteOne(id: number): Promise<Product | never> {
        return await prisma.product.delete({
            where: {
                id: id,
            },
        })
    }

    return {
        create,
        findMany,
        find,
        update,
        deleteOne,
    }
}
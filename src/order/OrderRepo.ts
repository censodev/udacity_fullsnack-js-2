import { Order, OrderDetail, Prisma, PrismaClient } from "@prisma/client";

export default function OrderRepo() {
    const prisma = new PrismaClient()

    async function create(model: Prisma.OrderCreateInput) {
        return await prisma.order.create({
            data: {
                ...model,
                details: {
                    create: model.details as OrderDetail[]
                }
            },
        })
    }

    async function findMany(): Promise<Order[]> {
        return await prisma.order.findMany({
            include: {
                details: {
                    select: {
                        productId: true,
                        qty: true,
                    },
                },
            },
        })
    }

    async function find(id: number): Promise<Order | null> {
        return await prisma.order.findFirst({
            where: {
                id: {
                    equals: id,
                }
            },
            include: {
                details: {
                    select: {
                        productId: true,
                        qty: true,
                    },
                },
            },
        })
    }

    async function update(id: number, model: Prisma.OrderUpdateInput) {
        return await prisma.order.update({
            where: {
                id: id,
            },
            data: model,
        })
    }

    async function deleteOne(id: number): Promise<Order | never> {
        return await prisma.order.delete({
            where: {
                id: id,
            },
        })
    }

    async function findByUserId(uid: number): Promise<Order[] | null> {
        return await prisma.order.findMany({
            where: {
                userId: {
                    equals: uid,
                }
            },
            include: {
                details: {
                    select: {
                        productId: true,
                        qty: true,
                    },
                },
            },
        })
    }

    return {
        create,
        findMany,
        find,
        update,
        deleteOne,
        findByUserId,
    }
}
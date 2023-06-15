import { pool } from '../server'

export type Order = {
    id: number
    status: string
    userId: number
    details: OrderDetail[]
}

export type OrderDetail = {
    id: number
    qty: number
    productId: number
    orderId: number
}

export default function OrderRepo() {
    async function create(model: Order): Promise<Order | undefined> {
        const client = await pool.connect()
        try {
            const { status, userId, details } = model
            await client.query('BEGIN')
            const res = await client.query<Order>(`
                INSERT INTO orders(status, "userId") VALUES ($1, $2) RETURNING *;
            `, [status, userId])
            const newOrder = res.rows[0]

            const newDetails = await Promise.all(details.map(async detail => {
                const res2 = await client.query<OrderDetail>(`
                    INSERT INTO order_details(qty, "productId", "orderId") VALUES ($1, $2, $3) RETURNING *;
                `, [detail.qty, detail.productId, newOrder.id])
                return res2.rows[0]
            }))
            await client.query('COMMIT')
            return {
                ...newOrder,
                details: newDetails,
            }
        } catch (error) {
            console.log(error)
            await client.query('ROLLBACK')
        } finally {
            client.release()
        }
    }

    async function findByUserId(uid: number): Promise<Order[]> {
        const client = await pool.connect()
        try {
            const { rows: orders } = await client.query<Order>(`
                SELECT o.* FROM orders o
                JOIN order_details d ON o.id = d."orderId"
                WHERE o."userId" = $1;
            `, [uid])
            return orders
        } catch (error) {
            console.log(error)
            return []
        } finally {
            client.release()
        }
    }

    return {
        create,
        findByUserId,
    }
}
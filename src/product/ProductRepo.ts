import { pool } from "../server"

export type Product = {
    id: number
    name: string
    price: number
}

export default () => {
    async function create(model: Product) {
        const client = await pool.connect()
        await client.connect()
        try {
            const { name, price } = model
            await client.query('BEGIN')
            const { rows: products } = await client.query<Product>(`
                INSERT INTO Product(name, price) VALUES ($1, $2) RETURNING *;
            `, [name, price])
            return products[0]
        } catch (error) {
            console.log(error)
        } finally {
            await client.release()
        }
    }

    async function findMany(): Promise<Product[]> {
        console.log('findMany')
        const client = await pool.connect()
        const { rows: products } = await client.query<Product>(`
            SELECT * FROM Product;
        `,)
        await client.release()
        return products
    }

    async function find(id: number): Promise<Product | null> {
        const client = await pool.connect()
        const { rows: products } = await client.query<Product>(`
            SELECT * FROM Product WHERE id = $1;
        `, [id])
        await client.release()
        return products.length > 0 ? products[0] : null
    }

    return {
        create,
        findMany,
        find,
    }
}
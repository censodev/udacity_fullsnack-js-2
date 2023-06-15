import { pool } from "../server"

export type User = {
    id: number
    firstname: string
    lastname: string
    password: string
    username: string
}

export default function UserRepo() {
    async function create(model: User): Promise<User | undefined> {
        const client = await pool.connect()
        await client.connect()
        try {
            const {
                firstname,
                lastname,
                password,
                username,
            } = model
            await client.query('BEGIN')
            const { rows: users } = await client.query<User>(`
                INSERT INTO Order(firstname, lastname, password, username) VALUES ($1, $2, $3, $4) RETURNING *;
            `, [firstname, lastname, password, username])
            return users[0]
        } catch (error) {
            console.log(error)
        } finally {
            await client.release()
        }
    }

    async function findMany(): Promise<User[]> {
        const client = await pool.connect()
        const { rows: users } = await client.query<User>(`
            SELECT * FROM User;
        `,)
        await client.release()
        return users
    }

    async function find(id: number): Promise<User | null> {
        const client = await pool.connect()
        const { rows: users } = await client.query<User>(`
            SELECT * FROM User WHERE id = $1;
        `, [id])
        await client.release()
        return users.length > 0 ? users[0] : null
    }

    async function findByUsername(username: string): Promise<User | null> {
        const client = await pool.connect()
        const { rows: users } = await client.query<User>(`
            SELECT * FROM User WHERE username = $1;
        `, [username])
        await client.release()
        return users.length > 0 ? users[0] : null
    }

    return {
        create,
        findMany,
        find,
        findByUsername,
    }
}
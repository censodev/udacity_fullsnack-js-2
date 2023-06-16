import express from 'express'
import bodyParser from 'body-parser'
import authRoute from './auth/auth.route'
import orderRoute from './order/order.route'
import userRoute from './user/user.route'
import productRoute from './product/product.route'
import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const app: express.Application = express()
const address: string = "0.0.0.0:3000"
export const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    port: 5432,
})

app.use(bodyParser.json())

app.use('/auth', authRoute)
app.use('/order', orderRoute)
app.use('/user', userRoute)
app.use('/product', productRoute)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app

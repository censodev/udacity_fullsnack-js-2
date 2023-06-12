import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import authRoute from './auth/auth.route'
import orderRoute from './order/order.route'
import userRoute from './user/user.route'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.use('/auth', authRoute)
app.use('/order', orderRoute)
app.use('/user', userRoute)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import authRoute from './auth/auth.route'
import orderRoute from './order/order.route'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.use('/auth', authRoute)
app.use('/order', orderRoute)

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

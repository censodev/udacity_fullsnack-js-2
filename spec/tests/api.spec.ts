import TokenProvider from '../../src/auth/TokenProvider'
import configs from '../../src/configs'
import app from '../../src/server'
import request from 'supertest'

describe("test suite", function () {
    it("POST /auth/register - 200", async function () {
        const body = {
            firstname: "Phuong",
            lastname: "Bui",
            password: "123456",
            username: "123456"
        }
        await request(app)
            .post('/auth/register')
            .send(body)
            .set('Accept', 'application/json')
            .expect(200)
    })

    it("POST /auth/login - 200", async function () {
        const body = {
            password: "123456",
            username: "123456"
        }
        await request(app)
            .post('/auth/login')
            .send(body)
            .set('Accept', 'application/json')
            .expect(200)
    })

    const uid = 1
    const token = TokenProvider(configs.JWT_SECRET).generate({ id: uid })

    it("GET /user - 401", async function () {
        await request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect(401)
    })

    it("GET /user - 200", async function () {
        await request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
    })

    it("GET /user/:id - 401", async function () {
        const res = await request(app)
            .get('/user/1')
            .set('Accept', 'application/json')
            .expect(401)
        expect(res.body.id === 1)
    })

    it("GET /user/:id - 200", async function () {
        const res = await request(app)
            .get('/user/1')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
        expect(res.body.id === 1)
    })

    it("POST /user - 200", async function () {
        const body = {
            firstname: "Phuong",
            lastname: "Bui",
            password: "test",
            username: "test"
        }
        const res = await request(app)
            .post('/user')
            .send(body)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
        expect(res.body.id !== null)
    })

    it("GET /product - 200", async function () {
        await request(app)
            .get('/product')
            .set('Accept', 'application/json')
            .expect(200)
    })

    it("GET /product/:id - 200", async function () {
        const res = await request(app)
            .get('/product/1')
            .set('Accept', 'application/json')
            .expect(200)
        expect(res.body.id === 1)
    })

    it("POST /product - 200", async function () {
        const body = {
            name: "product 2",
            price: 2000
        }
        const res = await request(app)
            .post('/product')
            .send(body)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
        expect(res.body.id !== null)
    })

    it("POST /order - 200", async function () {
        const body = {
            details: [
                {
                    qty: 1,
                    productId: 1
                },
            ]
        }
        const res = await request(app)
            .post('/order')
            .send(body)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
        expect(res.body.status === 'active')
        expect(res.body.id !== null)
        expect(res.body.userId === uid)
    })

    it("GET /order/me - 401", async function () {
        await request(app)
            .get('/order/me')
            .set('Accept', 'application/json')
            .expect(401)
    })

    it("GET /order/me - 200", async function () {
        await request(app)
            .get('/order/me')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
    }, 10000)
})
import AuthService from '../../src/auth/AuthService'
import TokenProvider from '../../src/auth/TokenProvider'
import app from '../../src/server'
import request from 'supertest'

describe("test suite", function () {
    const token = TokenProvider(process.env.JWT_SECRET ?? '').generate({ id: 1 })

    it("POST /order - 200", async function () {
        const body = {}
        const res = await request(app)
            .post('/order')
            .send(body)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
        console.log(res.body)
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
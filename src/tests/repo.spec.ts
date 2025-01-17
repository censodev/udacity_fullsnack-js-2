import OrderRepo from "../order/OrderRepo"
import ProductRepo from "../product/ProductRepo"
import UserRepo from "../user/UserRepo"

const userRepo = UserRepo()

const mockUser = {
    id: 0,
    firstname: 'test01_firstname',
    lastname: 'test01_lastname',
    password: 'test01_password',
    username: 'test01_username',
}

describe("UserRepo test suite", function () {
    it('user.create', async function () {
        const res = await userRepo.create(mockUser)
        expect(res?.firstname).toEqual(mockUser.firstname)
        expect(res?.lastname).toEqual(mockUser.lastname)
        expect(res?.password).toEqual(mockUser.password)
        expect(res?.username).toEqual(mockUser.username)
    })

    it('user.find', async function () {
        const res = await userRepo.find(1)
        expect(res).toBeDefined()
    })

    it('user.findMany', async function () {
        const res = await userRepo.findMany()
        expect(res.length).toBeGreaterThan(0)
    })

    it('user.findByUsername', async function () {
        const res = await userRepo.findByUsername(mockUser.username)
        expect(res?.firstname).toEqual(mockUser.firstname)
        expect(res?.lastname).toEqual(mockUser.lastname)
        expect(res?.password).toEqual(mockUser.password)
        expect(res?.username).toEqual(mockUser.username)
    })
})

const productRepo = ProductRepo()
const mockProduct = {
    id: 0,
    name: 'test01_prd_name',
    price: 2000,
}

describe("ProductRepo test suite", function () {
    it('product.create', async function () {
        const res = await productRepo.create(mockProduct)
        expect(res?.name).toEqual(mockProduct.name)
        expect(res?.price).toEqual(mockProduct.price)
    })

    it('product.find', async function () {
        const res = await productRepo.find(1)
        expect(res).toBeDefined()
    })

    it('product.findMany', async function () {
        const res = await productRepo.findMany()
        expect(res.length).toBeGreaterThan(0)
    })
})

const orderRepo = OrderRepo()
const mockOrder = {
    id: 0,
    status: 'active',
    userId: 1,
    details: [
        {
            id: 0,
            qty: 1,
            productId: 1,
            orderId: 0,
        },
    ],
}

describe("OrderRepo test suite", function () {
    it('order.create', async function () {
        const res = await orderRepo.create(mockOrder)
        expect(res?.status).toEqual(mockOrder.status)
        expect(res?.userId).toEqual(mockOrder.userId)
        expect(res?.details[0].qty).toEqual(mockOrder.details[0].qty)
        expect(res?.details[0].productId).toEqual(mockOrder.details[0].productId)
    })

    it('order.findByUserId', async function () {
        const res = await orderRepo.findByUserId(1)
        expect(res.length).toBeGreaterThan(0)
    })
})
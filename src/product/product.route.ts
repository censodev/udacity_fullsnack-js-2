import express from 'express'
import authMiddleware from '../auth/auth.middleware'
import ProductRepo from './ProductRepo'

const router = express.Router()
const productRepo = ProductRepo()

router.get('/', async (req, res) => {
    res.json(await productRepo.findMany())
})


router.get('/:id', async (req, res) => {
    res.json(await productRepo.find(+req.params.id))

})

router.post('/', authMiddleware, async (req, res) => {
    const { body } = req
    const rs = await productRepo.create(body)
    res.json(rs ?? {
        message: 'created failed'
    })
})

export default router
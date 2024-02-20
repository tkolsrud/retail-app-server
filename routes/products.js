import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as productsCtrl from '../controllers/products.js'


const router = Router()

// Public Routes
router.get('/', productsCtrl.allProducts)
router.get('/categories', productsCtrl.categoryIndex)
router.get('/category/:category', productsCtrl.categoryProductIndex)
router.get('/:productId', productsCtrl.productShow)

// Protected Routes
router.use(decodeUserFromToken)

export { router }
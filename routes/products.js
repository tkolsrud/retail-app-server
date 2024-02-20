import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as productsCtrl from '../controllers/products.js'


const router = Router()

// Public Routes
router.get('/', productsCtrl.allProducts)

// Protected Routes
router.use(decodeUserFromToken)

export { router }
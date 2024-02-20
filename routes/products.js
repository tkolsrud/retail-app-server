import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as productsCtrl from '../controllers/products.js'


const router = Router()

// Public Routes
router.get('/all', productsCtrl.allProducts)
router.get('/categories', productsCtrl.allCategories)

// Protected Routes
router.use(decodeUserFromToken)

export { router }
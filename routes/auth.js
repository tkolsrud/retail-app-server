import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as authCtrl from '../controllers/auth.js'

const router = Router()

// Public Routes
router.post('/signup', authCtrl.signup)

// Protected Routes
router.use(decodeUserFromToken)

export { router }
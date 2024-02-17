// npm packages
import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import formData from 'express-form-data'


// Connect to MongoDB 
import './config/database.js'

// Import Routes
import { router as authRouter } from './routes/auth.js'

// Create Express App
const app = express()

// middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())

// Mount Imported Routes
app.use('/api/auth', authRouter)

// Handle 404 Errors
app.use(function (req, res, next) {
  res.status(404).json(({ err: 'Not Found'}))
})

// Handle All Other Errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
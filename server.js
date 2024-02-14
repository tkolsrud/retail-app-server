// npm packages
import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import formData from 'express-form-data'

// create express app
const app = express()

// middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())


export { app }
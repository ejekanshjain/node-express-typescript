import express, { Application } from 'express'

if (process.env.NODE_ENV !== 'production')
    require('dotenv').config()

const port = process.env.PORT || 5000
import MainRouter from './router/routes'

const app: Application = express()

app.use('/', MainRouter)

app.listen(port, () => console.log(`Server Started on port ${port}...`))
import 'express-async-errors';
import express, { Application, json } from 'express'
import router from './routes'
import { handleErrors } from './AppError'

const app: Application = express()

app.use(json())

app.use('',router)

app.use(handleErrors)

export default app

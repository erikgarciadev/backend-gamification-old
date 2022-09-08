import express, { Express } from 'express'
import { BASE_URL } from '../config/constants'
import userRouter from './user.router'
import utilRouter from './util.router'

function routerApi(app: Express) {
    const router = express.Router()
    app.use(`${BASE_URL}/v1`, router)
    router.use('/users', userRouter)
    router.use('/utils', utilRouter)
}

export default routerApi

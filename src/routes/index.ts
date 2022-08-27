import express, { Express } from 'express'
import { BASE_URL } from '../config/constants'

function routerApi(app: Express) {
    const router = express.Router()
    app.use(`${BASE_URL}/v1`, router)
}

export default routerApi

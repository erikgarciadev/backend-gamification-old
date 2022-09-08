import { Router } from 'express'
import UtilController from '../controllers/util.controller'

const utilRouter = Router()

utilRouter.get('/downloadBackup', UtilController.downloadBackup)

export default utilRouter

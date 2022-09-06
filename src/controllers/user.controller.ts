import { Request, Response } from 'express'
import UserService from '../services/user.service'

class UserController {
    async getUsers(req: Request, res: Response) {
        const response = await UserService.getUsers()
        res.send(response)
    }

    async getUser({ params }: Request, res: Response) {
        const { id } = params
        const response = await UserService.getUser(id)
        res.send(response)
    }
    async createUser({ body }: Request, res: Response) {
        const response = await UserService.createUser(body)
        res.send(response)
    }

    async updateUser({ params, body }: Request, res: Response) {
        const { id } = params
        const response = await UserService.updateUser(id, body)

        res.send(response)
    }

    async deleteUser({ params }: Request, res: Response) {
        const { id } = params
        const response = await UserService.deleteUser(id)

        res.send(response)
    }
}

export default new UserController()

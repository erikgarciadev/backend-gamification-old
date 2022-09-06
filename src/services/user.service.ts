import { User } from '../interfaces/user.interface'
import UserModel from '../models/user.model'

const fieldsUser = {
    username: 1,
    firstname: 1,
    image_url: 1,
    deleted: 1,
    created_at: 1,
    updated_at: 1
}

class UserService {
    async getUsers() {
        const response = await UserModel.find(
            {
                deleted: false
            },
            fieldsUser
        )
        return response
    }

    async getUser(id: string) {
        const response = await UserModel.findById(id, fieldsUser)
        return response
    }
    async createUser(user: User) {
        const response = await UserModel.create(user)
        return response
    }

    async updateUser(id: string, data: User) {
        const response = await UserModel.findOneAndUpdate(
            {
                _id: id
            },
            data,
            {
                new: true,
                fields: fieldsUser
            }
        )

        return response
    }

    async deleteUser(id: string) {
        const response = await UserModel.findOneAndUpdate(
            {
                _id: id
            },
            {
                deleted: true
            },
            {
                new: true,
                fields: fieldsUser
            }
        )

        return response
    }
}

export default new UserService()

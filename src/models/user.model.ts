import { prop, getModelForClass, modelOptions, pre } from '@typegoose/typegoose'
import bcrypt from 'bcryptjs'

@pre<User>('save', async function () {
    this.password = await bcrypt.hash(this.password, 10)
})
@modelOptions({
    schemaOptions: {
        timestamps: {
            updatedAt: 'updated_at',
            createdAt: 'created_at'
        },
        versionKey: false
    }
})
export class User {
    @prop({ required: true, unique: true, trim: true })
    username: string

    @prop({ required: true, trim: true })
    firstname: string

    @prop({ enum: ['M', 'F'] })
    gender: string

    @prop({ required: true, minlength: 6 })
    password: string

    @prop({})
    image_url: string

    @prop({ required: true, default: false })
    deleted: boolean
}

const UserModel = getModelForClass(User)
export default UserModel

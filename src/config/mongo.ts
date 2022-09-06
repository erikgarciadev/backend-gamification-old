import { connect, Connection } from 'mongoose'
import { MONGOBD_URL } from './constants'

class Db {
    private MONGOBD_URL: string
    private connection: Connection | null
    constructor() {
        this.MONGOBD_URL = MONGOBD_URL
        this.connection = null
    }

    getConnection() {
        return this.connection
    }

    async dbConnect() {
        try {
            const db = await connect(this.MONGOBD_URL)
            this.connection = db.connection
        } catch (error) {
            console.log('error', error)
        }
    }
}

export default new Db()

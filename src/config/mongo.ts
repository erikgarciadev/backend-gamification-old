import { connect, Connection } from 'mongoose'
import { MONGOBD_URL } from './constants'
import { spawn } from 'child_process'

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

    async backup(fileName: string) {
        const child = await spawn('mongodump', [
            `--uri=${this.MONGOBD_URL}`, //this is CommandLine tool for Mongodump
            `--archive=./${fileName}`,
            '--gzip'
        ])

        child.stdout.on('data', (data) => {
            console.log('stdout:\n', data)
        })
        child.stderr.on('data', (data) => {
            console.log('stderr:\n', Buffer.from(data).toString())
        })
        child.on('error', (error) => {
            console.log('error:\n', error)
        })
        child.on('exit', (code, signal) => {
            if (code) console.log('Process exit with code:', code)
            else if (signal) console.log('Process killed with signal:', signal)
            else console.log('Backup is successfull ')
        })
    }
}

export default new Db()

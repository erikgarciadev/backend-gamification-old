import mongoose from 'mongoose'
import { MONGOBD_URL } from './constants'

mongoose.connect(MONGOBD_URL)

const conn = mongoose.connection

conn.on('error', () => console.error.bind(console, 'connection error'))

conn.once('open', () => console.info('Connection to Database is succesful'))

export default conn

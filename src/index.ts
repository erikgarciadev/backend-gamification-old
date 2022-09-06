import app from './app'
import { PORT } from './config/constants'
import routerApi from './routes'
import Db from './config/mongo'

routerApi(app)

Db.dbConnect().then(() => console.log('Conexion ready'))
app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT}`)
})

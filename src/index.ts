import app from './app'
import { PORT } from './config/constants'
import routerApi from './routes'

routerApi(app)

app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT}`)
})

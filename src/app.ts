import express, { Express } from 'express'
import cors from 'cors'

const app: Express = express()

import swaggerUI from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'backend-gamification',
            version: '1.0.0'
        },
        basePath: '/'
    },
    apis: [
        './src/swagger/definitions/user.yaml',
        './src/routes/*/*.ts',
        './src/swagger/apis/*/*yaml'
    ]
}

app.use(express.json())
// const whitelist =['http://localhost:3000','http://localhost:8080','http://localhost:8888', 'https://myapp.co']

// const options: CorsOptions ={
//     origin: (origin ,callback) => {
//         if(whitelist.includes(origin!)){
//             callback(null, true)
//         }else {
//             console.log(origin)
//             callback(new Error('no permitido'))
//         }
//     }
// }

// app.use(cors(options))
app.use(cors())

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsdoc(swaggerSpec)))

export default app

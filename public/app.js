"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swaggerSpec = {
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
};
app.use(express_1.default.json());
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
app.use((0, cors_1.default)());
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup((0, swagger_jsdoc_1.default)(swaggerSpec)));
exports.default = app;

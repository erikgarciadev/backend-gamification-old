"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var constants_1 = require("../config/constants");
var user_router_1 = __importDefault(require("./user.router"));
function routerApi(app) {
    var router = express_1.default.Router();
    app.use("".concat(constants_1.BASE_URL, "/v1"), router);
    router.use('/users', user_router_1.default);
}
exports.default = routerApi;

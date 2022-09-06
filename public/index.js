"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var constants_1 = require("./config/constants");
var routes_1 = __importDefault(require("./routes"));
var mongo_1 = __importDefault(require("./config/mongo"));
(0, routes_1.default)(app_1.default);
mongo_1.default.dbConnect().then(function () { return console.log('Conexion ready'); });
app_1.default.listen(constants_1.PORT, function () {
    return console.log("server is listening on ".concat(constants_1.PORT));
});

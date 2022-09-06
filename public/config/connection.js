"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var constants_1 = require("./constants");
mongoose_1.default.connect(constants_1.MONGOBD_URL);
var conn = mongoose_1.default.connection;
conn.on('error', function () { return console.error.bind(console, 'connection error'); });
conn.once('open', function () { return console.info('Connection to Database is succesful'); });
exports.default = conn;

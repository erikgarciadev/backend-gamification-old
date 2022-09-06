"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGOBD_URL = exports.BASE_URL = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT;
exports.BASE_URL = '/api';
exports.MONGOBD_URL = process.env.MONGODB_URL;

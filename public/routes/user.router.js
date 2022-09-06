"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var userRouter = (0, express_1.Router)();
userRouter.get('/', user_controller_1.default.getUsers);
userRouter.get('/:id', user_controller_1.default.getUser);
userRouter.post('/', user_controller_1.default.createUser);
userRouter.put('/:id', user_controller_1.default.updateUser);
userRouter.delete('/:id', user_controller_1.default.deleteUser);
exports.default = userRouter;

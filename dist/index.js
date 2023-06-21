"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const UserValidator_1 = require("./UserValidator");
const UserRepository_1 = require("./UserRepository");
const user = new User_1.User("name", "email", "password");
if (UserValidator_1.UserValidator.validate(user)) {
    UserRepository_1.UserRepository.save(user);
    console.log('Usuario creado correctamente');
}

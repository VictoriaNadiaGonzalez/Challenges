"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FirstChallengeUser_1 = require("./FirstChallengeUser");
const FirstChallengeUserValidator_1 = require("./FirstChallengeUserValidator");
const FirstChallngeUserRepository_1 = require("./FirstChallngeUserRepository");
const user = new FirstChallengeUser_1.User("", "email", "pass");
if (FirstChallengeUserValidator_1.UserValidator.validate(user)) {
    FirstChallngeUserRepository_1.UserRepository.save(user);
    console.log("Usuario creado correctamente");
}

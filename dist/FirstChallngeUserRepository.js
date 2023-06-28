"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_1 = __importDefault(require("./prisma"));
class UserRepository {
    static async save(user) {
        const createdUser = await prisma_1.default.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });
        return createdUser;
    }
}
exports.UserRepository = UserRepository;

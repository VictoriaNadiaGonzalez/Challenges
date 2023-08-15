"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const change_1 = __importDefault(require("./change"));
describe('Minimum coins to make change', () => {
    test('Empty coins array', () => {
        const coins = [];
        const result = (0, change_1.default)(coins);
        expect(result).toBe(1);
    });
    test('Coins with unique values', () => {
        const coins = [1, 5, 1, 10];
        const result = (0, change_1.default)(coins);
        expect(result).toBe(3);
    });
    test('Coins with duplicates', () => {
        const coins = [1, 1, 1, 2, 5, 5];
        const result = (0, change_1.default)(coins);
        expect(result).toBe(16);
    });
    test('Unordered coins', () => {
        const coins = [5, 1, 10, 2];
        const result = (0, change_1.default)(coins);
        expect(result).toBe(4);
    });
    test('Unordered coins', () => {
        const coins = [5, 1, 10, 2, 2];
        const result = (0, change_1.default)(coins);
        expect(result).toBe(21);
    });
});

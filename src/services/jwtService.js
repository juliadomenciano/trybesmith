"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JwtService = /** @class */ (function () {
    function JwtService() {
        this.createToken = function (data) {
            var JWT_SECRET = 'theBestSecretEver';
            var token = jsonwebtoken_1.default.sign({ data: data }, JWT_SECRET);
            return token;
        };
    }
    return JwtService;
}());
exports.default = JwtService;

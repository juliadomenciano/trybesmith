"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
function validateProduct(data) {
    var schema = joi_1.default.object({
        name: joi_1.default.string().required().min(3),
        amount: joi_1.default.string().required().min(3),
    });
    var error = schema.validate(data).error;
    if (error) {
        if (error.message.includes('length')) {
            var e_1 = new Error('"name" length must be at least 3 characters long');
            e_1.name = 'LengthValidation';
            throw e_1;
        }
        var e = new Error(error.details[0].message);
        e.name = 'ValidationError';
        throw e;
    }
}
exports.default = validateProduct;

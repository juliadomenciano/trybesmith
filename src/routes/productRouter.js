"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productController_1 = __importDefault(require("../controllers/productController"));
var validations_1 = __importDefault(require("../middlewares/validations"));
var router = (0, express_1.Router)();
var productController = new productController_1.default();
router.use(validations_1.default);
router.get('/', productController.getAll);
router.post('/', function (req, res) { return productController.create(req, res); });
exports.default = router;

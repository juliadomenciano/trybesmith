"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var orderController_1 = __importDefault(require("../controllers/orderController"));
var router = (0, express_1.Router)();
var orderController = new orderController_1.default();
router.get('/', function (req, res) { return orderController.getAll(req, res); });
exports.default = router;

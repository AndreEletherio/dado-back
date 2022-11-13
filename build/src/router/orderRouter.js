"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const OrderBusiness_1 = require("../business/OrderBusiness");
const OrderController_1 = require("../controller/OrderController");
const OrderDatabase_1 = require("../database/OrderDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
exports.orderRouter = (0, express_1.Router)();
const orderController = new OrderController_1.OrderController(new OrderBusiness_1.OrderBusiness(new OrderDatabase_1.OrderDatabase(), new IdGenerator_1.IdGenerator()));
exports.orderRouter.post("/orders", orderController.createOrder);
exports.orderRouter.get("/orders", orderController.getOrders);
//# sourceMappingURL=orderRouter.js.map
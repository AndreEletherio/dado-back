"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import dotenv from "dotenv";
const pizzaRouter_1 = require("./router/pizzaRouter");
const orderRouter_1 = require("./router/orderRouter");
// dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(process.env.PORT || 3003, () => {
    console.log(`Server running in port:${process.env.PORT || 3003}`);
});
app.use("/api", pizzaRouter_1.pizzaRouter);
app.use("/api", orderRouter_1.orderRouter);
//# sourceMappingURL=index.js.map
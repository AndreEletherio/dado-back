"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
class OrderController {
    constructor(orderBusiness) {
        this.orderBusiness = orderBusiness;
        this.createOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    pizzas: req.body.pizzas
                };
                const response = yield this.orderBusiness.createOrder(input);
                res.send(response);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(res.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Unexpected error" });
            }
        });
        this.getOrders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.orderBusiness.getOrders();
                res.send({
                    orders: response
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(res.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Unexpected error" });
            }
        });
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=OrderController.js.map
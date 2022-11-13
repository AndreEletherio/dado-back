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
exports.OrderBusiness = void 0;
const EmptyOrder_1 = require("../errors/EmptyOrder");
const PizzaNotFound_1 = require("../errors/PizzaNotFound");
const PizzaQnt_1 = require("../errors/PizzaQnt");
class OrderBusiness {
    constructor(orderDatabase, idGenerator) {
        this.orderDatabase = orderDatabase;
        this.idGenerator = idGenerator;
        this.createOrder = (input) => __awaiter(this, void 0, void 0, function* () {
            const pizzasInput = input.pizzas;
            if (pizzasInput.length == 0) {
                throw new EmptyOrder_1.EmptyOrder();
            }
            const pizzas = pizzasInput.map((pizza) => {
                if (pizza.quantity <= 0) {
                    throw new PizzaQnt_1.PizzaQnt();
                }
                return Object.assign(Object.assign({}, pizza), { price: 0 });
            });
            for (let pizza of pizzas) {
                const price = yield this.orderDatabase.getPrice(pizza.name);
                if (!price) {
                    throw new PizzaNotFound_1.PizzaNotFound();
                }
                pizza.price = price;
            }
            const order_id = this.idGenerator.generate();
            yield this.orderDatabase.createOrder(order_id);
            for (let pizza of pizzas) {
                const input = {
                    id: this.idGenerator.generate(),
                    pizza_name: pizza.name,
                    quantity: pizza.quantity,
                    order_id: order_id
                };
                yield this.orderDatabase.insertIntoOrder(input);
            }
            const totalPrice = pizzas.reduce((tP, pizza) => tP + (pizza.price * pizza.quantity), 0);
            const response = {
                message: "Order created!",
                order: {
                    id: order_id,
                    pizzas: pizzas,
                    total: totalPrice
                }
            };
            return response;
        });
        this.getOrders = () => __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.orderDatabase.getOrders();
            const ordersArray = [];
            for (let order of orders) {
                const orderAlreadyInArray = ordersArray.find((ord) => ord.id == order.order_id);
                const price = yield this.orderDatabase.getPrice(order.pizza_name);
                if (orderAlreadyInArray) {
                    orderAlreadyInArray.pizzas.push({ name: order.pizza_name, quantity: order.quantity, price: price });
                    orderAlreadyInArray.total += price;
                }
                else {
                    const newOrder = {
                        id: order.order_id,
                        pizzas: [{
                                name: order.pizza_name,
                                quantity: order.quantity,
                                price: price
                            }],
                        total: price
                    };
                    ordersArray.push(newOrder);
                }
            }
            return ordersArray;
        });
    }
}
exports.OrderBusiness = OrderBusiness;
//# sourceMappingURL=OrderBusiness.js.map
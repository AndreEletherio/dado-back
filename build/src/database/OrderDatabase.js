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
exports.OrderDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class OrderDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.getPrice = (name) => __awaiter(this, void 0, void 0, function* () {
            const price = yield BaseDatabase_1.BaseDatabase
                .connection("pizza")
                .select("price")
                .where({ name });
            return price && price[0].price;
        });
        this.createOrder = (id) => __awaiter(this, void 0, void 0, function* () {
            yield BaseDatabase_1.BaseDatabase
                .connection("orders")
                .insert({ id });
        });
        this.insertIntoOrder = (input) => __awaiter(this, void 0, void 0, function* () {
            yield BaseDatabase_1.BaseDatabase
                .connection("specific_order")
                .insert(input);
        });
        this.getOrders = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield BaseDatabase_1.BaseDatabase
                .connection("orders")
                .select("order_id", "pizza_name", "quantity")
                .join("specific_order", "specific_order.order_id", "=", "orders.id");
            return response;
        });
        this.getOrderItems = (id) => __awaiter(this, void 0, void 0, function* () {
            const response = yield BaseDatabase_1.BaseDatabase
                .connection("specific_order")
                .select()
                .where({ id });
            return response;
        });
    }
}
exports.OrderDatabase = OrderDatabase;
//# sourceMappingURL=OrderDatabase.js.map
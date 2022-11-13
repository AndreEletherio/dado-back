"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, orderItems) {
        this.id = id;
        this.orderItems = orderItems;
        this.getId = () => {
            return this.id;
        };
        this.setOrderItems = (orderItems) => {
            this.orderItems = orderItems;
        };
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map
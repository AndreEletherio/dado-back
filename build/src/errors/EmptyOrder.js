"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyOrder = void 0;
const BaseError_1 = require("./BaseError");
class EmptyOrder extends BaseError_1.BaseError {
    constructor() {
        super("Insert at least 1 pizza", 400);
    }
}
exports.EmptyOrder = EmptyOrder;
//# sourceMappingURL=EmptyOrder.js.map
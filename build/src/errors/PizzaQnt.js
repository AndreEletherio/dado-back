"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaQnt = void 0;
const BaseError_1 = require("./BaseError");
class PizzaQnt extends BaseError_1.BaseError {
    constructor() {
        super("Pizza quantity must be greater than 0", 400);
    }
}
exports.PizzaQnt = PizzaQnt;
//# sourceMappingURL=PizzaQnt.js.map
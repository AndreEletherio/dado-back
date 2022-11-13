"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaNotFound = void 0;
const BaseError_1 = require("./BaseError");
class PizzaNotFound extends BaseError_1.BaseError {
    constructor() {
        super("Pizza not found", 404);
    }
}
exports.PizzaNotFound = PizzaNotFound;
//# sourceMappingURL=PizzaNotFound.js.map
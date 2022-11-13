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
exports.PizzaController = void 0;
class PizzaController {
    constructor(pizzaBusiness) {
        this.getPizzas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pizzas = yield this.pizzaBusiness.getPizzas();
                res.send(pizzas);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(res.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Unexpected error" });
            }
        });
        this.pizzaBusiness = pizzaBusiness;
    }
}
exports.PizzaController = PizzaController;
//# sourceMappingURL=PizzaController.js.map
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
exports.PizzaBusiness = void 0;
const Pizza_1 = require("../model/Pizza");
class PizzaBusiness {
    constructor(pizzaDatabase) {
        this.getPizzas = () => __awaiter(this, void 0, void 0, function* () {
            const pizzas = yield this.pizzaDatabase.getPizzas();
            const pizzasArray = [];
            for (let rawPizza of pizzas) {
                const pizzaAlreadyExists = pizzasArray.find((pizza) => pizza.getName() == rawPizza.name);
                if (pizzaAlreadyExists) {
                    pizzaAlreadyExists.addIngredient(rawPizza.ingredient);
                }
                else {
                    const newPizza = new Pizza_1.Pizza(rawPizza.name, rawPizza.price, [rawPizza.ingredient]);
                    pizzasArray.push(newPizza);
                }
            }
            return pizzasArray;
        });
        this.pizzaDatabase = pizzaDatabase;
    }
}
exports.PizzaBusiness = PizzaBusiness;
//# sourceMappingURL=PizzaBusiness.js.map
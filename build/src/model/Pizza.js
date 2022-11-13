"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
class Pizza {
    constructor(name, price, ingredients) {
        this.getName = () => {
            return this.name;
        };
        this.getPrice = () => {
            return this.price;
        };
        this.getIngredients = () => {
            return this.ingredients;
        };
        this.addIngredient = (ingredient) => {
            this.ingredients.push(ingredient);
        };
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
}
exports.Pizza = Pizza;
//# sourceMappingURL=Pizza.js.map
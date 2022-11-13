"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaRouter = void 0;
const express_1 = require("express");
const PizzaBusiness_1 = require("../business/PizzaBusiness");
const PizzaController_1 = require("../controller/PizzaController");
const PizzaDatabase_1 = require("../database/PizzaDatabase");
exports.pizzaRouter = (0, express_1.Router)();
const pizzaController = new PizzaController_1.PizzaController(new PizzaBusiness_1.PizzaBusiness(new PizzaDatabase_1.PizzaDatabase()));
exports.pizzaRouter.get("/pizzas", pizzaController.getPizzas);
//# sourceMappingURL=pizzaRouter.js.map
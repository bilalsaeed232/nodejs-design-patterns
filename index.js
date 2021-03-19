//entry point file...
const PizzaBuilder = require("./Pizza");

const smallPizza = new PizzaBuilder("small").addPepperoni().addCheese().build();
const largePizza = new PizzaBuilder("large").addBacon().build();

console.log(smallPizza);
console.log(largePizza);

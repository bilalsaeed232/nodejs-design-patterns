//entry point file...
const Pizza = require("./Pizza");

const smallPizza = new Pizza("small", true, true, false); // <---- these parameters doesn't give any information about the property
const largePizza = new Pizza("large", false, false, true);

console.log(smallPizza);
console.log(largePizza);

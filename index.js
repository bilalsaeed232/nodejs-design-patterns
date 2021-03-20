const CatalogGroup = require("./CatalogGroup");
const CatalogItem = require("./CatalogItem");
//entry point file...
let boots = new CatalogItem("Leather Boots", 33.9);
let sneakers = new CatalogItem("Sneakers", 22.6);

//use a group of items
let shoes = new CatalogGroup("All Shoes", [boots, sneakers]);
let fruites = new CatalogGroup("All Fruits", [
  new CatalogItem("Apples", 10.4),
  new CatalogItem("Bananas", 12.1),
]);

let shoppingCart = new CatalogGroup("Shopping Cart", [shoes, fruites]); //Note: how easy it is to work with either a single object or collection

shoppingCart.print();
console.log(`Total: ${shoppingCart.total}`);

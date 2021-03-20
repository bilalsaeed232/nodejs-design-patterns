const CatalogItem = require("./CatalogItem");
//entry point file...
let boots = new CatalogItem("Leather Boots", 33.9);
let sneakers = new CatalogItem("Sneakers", 22.6);

console.log(`Boots total: ${boots.total}`);

boots.print();
sneakers.print();

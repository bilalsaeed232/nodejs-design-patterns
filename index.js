//entry point file...
const Store = require("./Store");
const inventory = require("./inventory");

const skiShop = new Store("Super Skis", inventory.backroom); // <==== we are just looking into one particular area only
const searchItem = "ski rack";

let results = skiShop.find(searchItem);
console.log(results);

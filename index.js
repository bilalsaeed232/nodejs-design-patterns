//entry point file...
const Shopper = require("./Shopper");
const InventoryItem = require("./InventoryItem");

let book = new InventoryItem("Design Pattern Book", 9.5);
let bracelet = new InventoryItem("Simple Bracelet", 5);

let alex = new Shopper("Alex", 20);
alex.purchase(book);
alex.purchase(bracelet);

alex.printStatus();

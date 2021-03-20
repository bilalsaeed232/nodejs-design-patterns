//entry point file...
const Shopper = require("./Shopper");
const {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem,
} = require("./InventoryItem");

let book = new InventoryItem("Design Pattern Book", 9.5);
let bracelet = new InventoryItem("Simple Bracelet", 5);

let goldenBracelet = new GoldenInventoryItem(bracelet); // <===== we are decorating our base bracelet with new code
let diamondBracelet = new DiamondInventoryItem(bracelet);

let goldenDiamondBracelet = new GoldenInventoryItem(diamondBracelet);

let alex = new Shopper("Alex", 5000);
alex.purchase(book);
alex.purchase(bracelet);
alex.purchase(goldenBracelet);
alex.purchase(goldenDiamondBracelet);

alex.printStatus();

const InventoryItem = require("./InventoryItem");
const Iterator = require("./Iterator");

require("readline").emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const items = [
  new InventoryItem("espresso", 4.0),
  new InventoryItem("cappuchino", 6.0),
  new InventoryItem("americano", 3.0),
  new InventoryItem("latte", 5.0),
];

const inventory = new Iterator(items);

console.log("press any direction key...");

process.stdin.on("keypress", (str, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  switch (key.name) {
    case "right":
      inventory.next().print();
      break;

    case "left":
      inventory.prev().print();
      break;

    case "up":
      inventory.first().print();
      break;

    case "down":
      inventory.last().print();
      break;
    case "c":
      if (key.ctrl) {
        process.exit();
      }
  }
});

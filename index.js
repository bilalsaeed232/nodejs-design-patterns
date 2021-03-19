const logger = require("./Logger");
const Shopper = require("./Shopper");
const Store = require("./Store");

const alex = new Shopper("alex", 350);

const bikeShop = new Store("Chain gang", [
  {
    item: "Mountain bike",
    qty: 20,
    price: 250,
  },
  {
    item: "Trekking bike",
    qty: 80,
    price: 100,
  },
]);

logger.log("Startin app...");

logger.log("Finishing config...");

//check how many logs this class is storing so far
console.log(`${logger.count} logs total`);

//iterate over all the logs and check them
logger.logs.map((log) => console.log(log));

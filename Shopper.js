class Shopper {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
    this.items = [];
  }

  purchase(item) {
    if (this.balance < item.price) {
      console.log(`${this.name} cannot affort ${item.name}`);
    } else {
      console.log(`Purchasing item ${item.name}...`);
      this.balance -= item.price;
      this.items.push(item);
    }
  }

  printStatus() {
    console.log("======================================================");
    console.log(`${this.name} has purchased ${this.items.length} items`);
    console.log("======================================================");

    this.items.forEach((item) => {
      console.log(`* ${item.name} - ${item.price}€`);
    });

    console.log(
      `${this.name} has remainings ${this.balance.toFixed(2)}€ <========`
    );
  }
}

module.exports = Shopper;

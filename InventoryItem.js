class InventoryItem {
  constructor(name = "unknown item", price) {
    this.name = name;
    this.price = price;
  }

  print() {
    console.log(`${this.name} - ${this.price}`);
  }
}

module.exports = InventoryItem;

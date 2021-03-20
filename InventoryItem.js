class InventoryItem {
  constructor(name = "unknown item", price) {
    this.name = name;
    this.price = price;
  }

  print() {
    console.log(`${this.name} - ${this.price}`);
  }
}

class GoldenInventoryItem {
  constructor(baseItem) {
    this.name = `Golden ${baseItem.name}`;
    this.price = 1000 + baseItem.price;
  }
}

class DiamondInventoryItem {
  constructor(baseItem) {
    this.name = `Diamond ${baseItem.name}`;
    this.price = 1200 + baseItem.price;
  }

  print() {
    console.log(`${this.name} is very expensive to buy...`);
  }
}

module.exports = { InventoryItem, GoldenInventoryItem, DiamondInventoryItem };

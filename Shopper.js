class Shopper {
  constructor(name) {
    this.name = name;
  }

  notify(storeName, discount) {
    console.log(`${this.name}, there is ${discount}% discount at ${storeName}`);
  }
}

module.exports = Shopper;

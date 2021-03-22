class Mall {
  constructor(name) {
    this.name = name;
  }

  notify(storeName, discount) {
    console.log(`${storeName} has announced ${discount}% off on everything`);
  }
}

module.exports = Mall;

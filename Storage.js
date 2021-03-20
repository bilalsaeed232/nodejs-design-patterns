class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;

    this.next = null;
  }

  lookInLocalStorage(itemName) {
    let index = this.inventory.map((item) => item.name).indexOf(itemName);
    return this.inventory[index];
  }

  setNext(storage) {
    this.next = storage;
  }

  find(itemName) {
    let found = this.lookInLocalStorage(itemName);

    if (found) {
      return {
        name: found.name,
        qty: found.qty,
        location: this.name,
        deliveryTime:
          this.deliveryTime === 0
            ? "now"
            : `Delivery in ${this.deliveryTime} day(s).`,
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return "we do not have this item!";
    }
  }
}

module.exports = Storage;

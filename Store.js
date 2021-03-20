const Storage = require("./Storage");

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;

    let floor = new Storage("store floor", inventory.floor);
    let backroom = new Storage("store backroom", inventory.backroom);
    let localStore = new Storage("store localStore", inventory.localStore);
    let warehouse = new Storage("store warehouse", inventory.warehouse);

    /*
    NOTE: expressjs uses the same design pattern,

    below we are chaining the next of every storage, more like a linked list with next
    pointers.
    This is called chain of responsibility
*/

    floor.setNext(backroom);
    backroom.setNext(localStore);
    localStore.setNext(warehouse);

    this.storage = floor;
  }

  find(itemName) {
    return this.storage.find(itemName);
  }
}

module.exports = Store;

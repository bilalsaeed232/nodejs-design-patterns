const { readFileSync, writeFile, unlink, existsSync } = require("fs");

const jsonFile = "localstorage.json";

class LocalStorage {
  constructor(fileName) {
    this.items = {};
    this.fileName = fileName;
    this.loadItems();
  }

  loadItems() {
    if (existsSync(jsonFile)) {
      console.log("JSON file found...");
      this.items = JSON.parse(readFileSync(jsonFile));
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    let res = JSON.stringify(this.items);
    writeFile(jsonFile, res, (f) => f);
  }

  clear() {
    this.items = [];
    unlink(jsonFile, (e) => console.log(`${jsonFile} removed...`));
  }

  handleError(error) {
    console.log("💥", error);
  }
}

module.exports = new LocalStorage(jsonFile);

const { appendFile } = require("fs");
const path = require("path");

class LoggerStrategy {
  static noDate(timestamp, message) {
    console.log(`${message}`);
  }

  static toConsole(timestamp, message) {
    console.log(`${timestamp} - ${message}`);
  }

  static toFile(timestamp, message) {
    let fileName = path.join(__dirname, "logs.txt");
    appendFile(fileName, `${timestamp} - ${message} \n`, (f) => f);
  }

  static none() {}
}

module.exports = LoggerStrategy;

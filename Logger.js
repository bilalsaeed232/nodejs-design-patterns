const LoggerStrategy = require("./LoggerStrategy");
const config = require("./config.json");

class Logger {
  constructor(strategy = "toConsole") {
    this.logs = [];
    this.strategy = LoggerStrategy[strategy];
  }

  changeStrategy(strategy) {
    this.strategy = LoggerStrategy[strategy];
  }

  log(message) {
    let timestamp = new Date().toISOString();
    this.logs.push({ timestamp, message });
    this.strategy(timestamp, message);
  }
}

module.exports = new Logger(config.logs.strategy);

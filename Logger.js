class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    let timeStamp = new Date().toISOString();
    console.log(`${timeStamp} - ${message}`);
    this.logs.push({ timeStamp, message });
  }
}

module.exports = new Logger();

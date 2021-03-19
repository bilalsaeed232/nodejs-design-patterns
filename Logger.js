class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ timestamp, message });
    console.log(`${timestamp} - ${message}`);
  }
}

module.exports = new Logger();

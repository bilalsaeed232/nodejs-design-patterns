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

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Logger();
    }

    return this.getInstance();
  }

  getInstance() {
    return Singleton.instance;
  }
}

module.exports = Singleton;

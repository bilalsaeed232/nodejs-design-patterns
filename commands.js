const { writeFile, unlink } = require("fs");

class ExitCommand {
  get name() {
    return "exiting... bye!";
  }

  execute() {
    process.exit(0);
  }

  // this command doesn't need and "undo" function
}

class CreateCommand {
  constructor(fileName, content) {
    this.fileName = fileName;
    this.body = content;
  }

  get name() {
    return `create ${this.fileName}...`;
  }

  execute() {
    writeFile(this.fileName, this.body, (f) => f);
  }

  undo() {
    unlink(this.fileName, (f) => f);
  }
}

module.exports = { ExitCommand, CreateCommand };

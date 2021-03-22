class Conductor {
  constructor() {
    this.history = [];
    this.undone = [];
  }

  run(command) {
    console.log(`Running ${command.name}...`);
    command.execute();
    this.history.push(command);
  }

  printHistory() {
    this.history.forEach((item) => console.log(`${item.name}`));
  }

  undo() {
    if (this.history.length === 0) {
      console.log("Nothing to undo!");
      return;
    }
    let command = this.history.pop();
    console.log(`Undoing ${command.name}`);
    command.undo();
    this.undone.push(command);
  }

  redo() {
    if (this.undone.length === 0) {
      console.log("Nothing to redo!");
      return;
    }
    let command = this.undone.pop();
    console.log(`Redoing ${command.name}`);
    command.execute();
    this.history.push(command);
  }
}

module.exports = new Conductor();

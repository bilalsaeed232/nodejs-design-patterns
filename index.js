const { createInterface } = require("readline");
const { ExitCommand, CreateCommand } = require("./commands");
const conductor = require("./conductor");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("create <fileName> <text> | undo | redo | history | exit");
rl.prompt();

rl.on("line", (input) => {
  const [commandText, ...remainingText] = input.split(" ");
  const [fileName, ...fileText] = remainingText;
  const text = fileText.join(" ");

  switch (commandText) {
    case "history":
      conductor.printHistory();
      break;

    case "undo":
      conductor.undo();
      break;

    case "redo":
      conductor.redo();
      break;

    case "exit":
      conductor.run(new ExitCommand());
      break;

    case "create":
      conductor.run(new CreateCommand(fileName, text));
      break;

    default:
      console.log(`Invalid command ${commandText}`);
      break;
  }

  rl.prompt();
});

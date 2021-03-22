const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("create <fileName> <text> | exit");
rl.prompt();

rl.on("line", (input) => {
  const [commandText, ...remainingText] = input.split(" ");
  const [fileName, ...fileText] = remainingText;
  const text = fileText.join(" ");

  switch (commandText) {
    case "exit":
      console.log("TODO: exit");
      break;

    case "create":
      console.log("TODO: create file!");
      console.log("File content:", text);
      break;

    default:
      console.log(`Invalid command ${commandText}`);
      break;
  }

  rl.prompt();
});

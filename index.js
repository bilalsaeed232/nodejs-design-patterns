//entry point file...
const path = require("path");
const fs = require("fs"); // <==== expensive object

let txtFile = path.join(__dirname, "Readme.txt");
let mdFile = path.join(__dirname, "Readme.md");

let result = (error, content) => {
  if (error) {
    console.log("\x07");
    console.error(error);
    process.exit(0);
  }

  console.log("reading file...");
  console.log(content);
};

fs.readFile(txtFile, "UTF-8", result);
fs.readFile(mdFile, "UTF-8", result);

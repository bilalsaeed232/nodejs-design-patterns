class FS_PROXY {
  constructor(fs) {
    this.fs = fs;
  }

  readFile(path, format, callback) {
    //only allow markdown files
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Can only read markdown file"));
    }

    this.fs.readFile(path, format, (error, content) => {
      //check if there are errors in actual reading of file
      if (error) {
        console.error("💥", error);
        return callback(error);
      }

      return callback(null, content);
    });
  }

  //NOTE: you would normally expose the rest of the fs module to be accessible
}

module.exports = FS_PROXY;

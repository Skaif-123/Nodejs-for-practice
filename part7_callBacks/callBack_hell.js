/**
 * !practing callbacks
 */
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "output.txt");

fs.readFile("part7_callBacks/input.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
    return;
  } else {
    console.log(data);
  }
  const modifiedData = data.toUpperCase();

  fs.writeFile("part7_callBacks/output.txt", modifiedData, (err) => {
    if (err) {
      throw err;
      return;
    }
  });
  fs.readFile("part7_callBacks/output.txt", "utf-8", (err, data) => {
    if (err) {
      throw err;
      return;
    } else {
      console.log(data);
    }
  });
});

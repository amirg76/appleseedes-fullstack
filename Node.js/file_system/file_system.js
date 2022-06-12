const { log } = require("console");
const fs = require("fs");

//1.
fs.writeFileSync("./myNewFile.txt", "Some text");
//2.
fs.copyFile("myNewFile.txt", "copyOfMyNewFile.txt", (err) => {
  if (err) {
    console.log(err);
  }
});
//3.
fs.rename("copyOfMyNewFile.txt", "renameCopyOfMyNewFile.txt", (err) => {
  if (err) {
    console.log(err);
  }
});
//4.
const files = fs.readdirSync(__dirname);
console.log(files);
//5.
fs.appendFileSync("myNewFile.txt", "append text");

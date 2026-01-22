const fs = require("fs");
const path = require("path");
// to read file:
const filePath = path.join(__dirname, "text.txt");
const text = fs.readFileSync(filePath, "utf8");
console.log(text);
console.log(text.toString());
//to write the file content:
fs.writeFileSync(filePath, "this is added to the file");
console.log("end");

//to rename the file:
// fs.renameSync("./text.txt", "renamedText.txt");

//to delete the file:
 //fs.unlinkSync(path);

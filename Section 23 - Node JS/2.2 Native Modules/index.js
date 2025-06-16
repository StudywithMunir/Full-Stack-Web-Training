// adding file system native node module (fs)
const fs = require('fs');

// data variables
let name = "Munir Butt";
let frameworkName = "Node JS";
let moduleName = "File System (fs)";
// data
let message = `This file is being created by ${name} using ${frameworkName}, ${moduleName} Native Node Module`;

// Writing to a file
// fs node native module writeFile method
// params (filepath along with filename / filename(if wants to create in same folder), data, callback(for showing error))

// fs.writeFile('message.txt',message,(err) => {
//     if(err) throw err;
//     console.log("File has been created sucessfully");
// });


// Reading a file
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
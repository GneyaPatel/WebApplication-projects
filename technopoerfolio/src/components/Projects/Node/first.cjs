console.log("Hello");

const fs = require('fs');
fs.writeFile("output.txt", "writin File", (err) => {
  if (err) console.log("Error occurred");
  else console.log("File Written Successfully");
} )
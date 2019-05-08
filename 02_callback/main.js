var fs = require("fs");

//Blocking Code Example
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("Program End");

//Non-Blocking Code Example
fs.readFile('input.txt', function(error, data){
    if (error) return console.error(error);
    console.log(data.toString());
});
console.log("Program End");
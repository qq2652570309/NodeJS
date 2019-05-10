const path  = require('path');

// Normalization
console.log(`normalization : ${path.normalize('/a//b/c/../d/.')}`);

// Join
console.log(`joint path : ${path.join('a','b','/c','..')}`);

// Resolve
console.log(`resolve test.js : ${path.resolve('test.js')}`);
console.log(`resolve Path.js : ${path.resolve('Path.js')}`);

// extName
console.log(`ext name : ${path.extname('test.js')}`);

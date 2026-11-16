const fs = require('fs');

// 1. Write operation
fs.writeFileSync('sample.txt', 'Hello Node.js\n');
console.log('File written successfully');

// 2. Append operation
fs.appendFileSync('sample.txt', 'This is synchronous file operation.\n');
console.log('Data appended successfully');

// 3. Read operation
const data = fs.readFileSync('sample.txt', 'utf8');
console.log('File contents:');
console.log(data);

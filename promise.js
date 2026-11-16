const fs = require('fs').promises;

async function fileOperations() {

    // Write operation
    await fs.writeFile('sample.txt', 'Hello Node.js\n');
    console.log('File written successfully');

    // Append operation
    await fs.appendFile(
        'sample.txt',
        'This is promise-based file operation.\n'
    );
    console.log('Data appended successfully');

    // Read operation
    const data = await fs.readFile('sample.txt', 'utf8');
    console.log('File contents:');
    console.log(data);
}

fileOperations();
const fs = require('fs');

// Write
fs.writeFile('sample.txt', 'Hello Node.js\n', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('File written successfully');

    // Append
    fs.appendFile('sample.txt', 'Welcome to asynchronous programming!\n', (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log('Data appended successfully');

        // Read
        fs.readFile('sample.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log('Final file contents:');
            console.log(data);
        });
    });
});
const fs = require('fs');
const { stdout } = require('process');
const stream = fs.createReadStream('./01-read-file/text.txt', {encoding: 'utf-8'});

stream.on('data', (data) => stdout.write(data));

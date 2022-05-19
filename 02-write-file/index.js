const fs = require('fs');
let readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const writeStream = fs.createWriteStream('./02-write-file/text.txt', (err) => {if (err) throw err;});
const { stdout } = process;

readline.question('Input text here: ', (line) => {
  if (line === 'exit') {
    process.exit();
  }
  fs.appendFile('./02-write-file/text.txt', line, (err) => {
    if (err) {
      throw err;
    }
  });
});


process.on('exit', () => stdout.write('Bye-bye!'));
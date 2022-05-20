const fs = require('fs');
let readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const writeStream = fs.createWriteStream('./02-write-file/text.txt', (err) => {if (err) throw err;});
const { stdout } = process;
console.log('Input data here: ');
readline.on('line', (input) => {
  if (input === 'exit') {
    process.exit();
  }
  writeStream.write(`${input}\n`, (err) => {
    if (err) {
      throw err;
    }
  });
});


process.on('exit', () => stdout.write('Bye-bye!'));
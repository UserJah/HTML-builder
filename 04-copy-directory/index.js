const fs = require('fs/promises');

const copyDir = async function(path, destination) {
  try {
    await fs.rm(destination, {recursive: true, force: true});
    await fs.mkdir(destination, {recursive: true});
    const files = await fs.readdir(path);
    for (let file of files) {
      fs.copyFile(`${path}/${file}`, `${destination}/${file}`);
    }
  } catch (err) {
    console.log(err);
  }
};

copyDir('./04-copy-directory/files', './04-copy-directory/files-copy');

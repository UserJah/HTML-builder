const fs = require('fs/promises');
const rd = async function (path) {
  try {
    const files = await fs.readdir(path, {withFileTypes: true});
    for (let file of files) {
      let fn = file.name;
      if (file.isFile()) {
        console.log(`<${fn.split('.')[0]}>-<${fn.split('.')[1]}>-<${(await fs.stat(`${path}/${fn}`)).size} bytes> `);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

rd('./03-files-in-folder/secret-folder');
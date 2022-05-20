const fs = require('fs/promises');

const mergeStyle = async function(path, destination) {
  try {
    const styles = await fs.readdir(path, {withFileTypes: true});
    let arr = [];
    for (let style of styles) {
      if (style.isFile() && style.name.split('.')[1] === 'css') {
        arr.push(await fs.readFile(`${path}/${style.name}`));
      }
    }
    console.log(arr);
    await fs.writeFile(`${destination}/bundle.css`, ...arr);
  } catch (err) {
    console.log(err);
  }
};


mergeStyle('./05-merge-styles/styles', './05-merge-styles/project-dist');



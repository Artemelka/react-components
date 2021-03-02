const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ignoredDirectories = [
  'stories',
  '_story-component',
  '_template'
];
const pathToElements = path.resolve('src/elements');
const stylesPath = glob.sync(`${pathToElements}/**/*.?(svg|less|sass|scss|css)`);
const assetsPath = glob.sync(`${pathToElements}/**/*.?(png|jpg|jpeg)`);
const allPath = assetsPath.concat(stylesPath);

const filterPath = allPath.filter(item =>
  ignoredDirectories.every(str => !item.includes(str))
);

filterPath.forEach(item => {
  if (!item) {
    return;
  }

  const [, target] = item.split('/elements');
  const fileDirectory = path.dirname(target);
  const fileDirectories = fileDirectory.split('/');

  let currentDirectory = path.resolve('./lib');

  fileDirectories.forEach(directory => {
    currentDirectory = path.resolve(currentDirectory, directory);

    if (!fs.existsSync(currentDirectory)) {
      fs.mkdirSync(currentDirectory);
    }
  });

  fs.copyFileSync(item, path.resolve(`./lib/${target}`));
});

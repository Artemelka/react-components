const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const glob = require('glob');

const pathToLib = path.resolve('src');
const storiesPath = glob.sync(`${pathToLib}/**/*`);

storiesPath.forEach((item: string) => {
  const name = path.basename(item);
  const splitName = name.split(/(?=[A-Z])/);
  const test = splitName.map((item: string) => item.toLowerCase()).join('-');
  console.log('item --- ', test);

  fs.renameSync(item, `${path.dirname(item)}/${test}`);
  // console.log('test ---- ', path.basename(item).split(/(?=[A-Z])/))
  // var scriptName = path.basename(item);
});

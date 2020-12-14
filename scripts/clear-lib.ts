const path = require('path');
const rimraf = require('rimraf');
const glob = require('glob');

const pathToLib = path.resolve('lib');
const paths = glob.sync(
  `${pathToLib}/**/?(stories|__tests__|__test__|tests|test)`,
);

paths.forEach(item => {
  rimraf.sync(item);
});

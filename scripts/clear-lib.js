const path = require('path');
const rimraf = require('rimraf');
const glob = require('glob');

const ignoredDirectories = [
  '_template',
  '_story-components',
  'stories',
  '__tests__',
  '__test__',
  'tests',
  'test',
];
const pathToLib = path.resolve('lib');
const paths = glob.sync(`${pathToLib}/**/?(${ignoredDirectories.join('|')})`);

paths.forEach(item => rimraf.sync(item));

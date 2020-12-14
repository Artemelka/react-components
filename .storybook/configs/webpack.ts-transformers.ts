const tsImportPluginFactory = require('ts-import-plugin');

const getCustomTransformers = () => ({
    before: [
        tsImportPluginFactory({
            style: false,
            libraryName: 'lodash',
            libraryDirectory: null,
            camel2DashComponentName: false
        }),
        tsImportPluginFactory({
            style: false,
            libraryName: 'lodash-es',
            libraryDirectory: null,
            camel2DashComponentName: false
        })
    ],
});

module.exports = getCustomTransformers;

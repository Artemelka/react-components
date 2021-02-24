const path = require('path');
const merge = require('webpack-merge');
const postcssNormalize = require('postcss-normalize');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const reModuleStyle = /\.module\.(s[a|c]ss)$/;
const reStyle = /\.(s[a|c]ss)$/;

const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

const commonConfig = {
    resolve: {
        extensions: ['.ts', '.tsx', '.scss'],
        alias: {
            '@artemelka/react-components': path.resolve(__dirname, '../src/elements'),
            '@artemelka/storybook': path.resolve(__dirname, '../src/storybook'),
            '@utils': path.resolve(__dirname, '../src/utils'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    {loader: 'cache-loader'},
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: require('os').cpus().length - 1,
                            poolRespawn: false,
                        },
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/plugin-syntax-dynamic-import',
                                [
                                    'import',
                                    {
                                        "libraryName": "lodash",
                                        "libraryDirectory" : "",
                                        "camel2DashComponentName": false
                                    },
                                    'lodash'
                                ],
                            ],
                        }
                    }
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                // exclude: [/node_modules/],
                use: [
                    {loader: 'cache-loader'},
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: require('os').cpus().length - 1,
                            poolRespawn: false,
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true,
                            getCustomTransformers: path.resolve(__dirname, 'configs/webpack.ts-transformers.ts'),
                        },
                    },
                    {
                        loader: require.resolve('react-docgen-typescript-loader'),
                    },
                ],
            },
            {
                test: reModuleStyle,
                include: [path.resolve('src')],
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 3,
                            sourceMap: isEnvProduction,
                            localIdentName: '[local]-[hash:base64:3]',
                            modules: true,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                require('postcss-preset-env')({
                                    autoprefixer: {
                                        flexbox: 'no-2009',
                                    },
                                    stage: 3,
                                }),
                                postcssNormalize(),
                            ],
                            sourceMap: isEnvProduction,
                        },
                    },
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            sourceMap: isEnvProduction,
                        },
                    },
                    {
                        loader: require.resolve('resolve-url-loader'),
                        options: {
                            sourceMap: isEnvProduction,
                        }
                    },

                ]
            }
        ],
    },
    plugins: [
        new Dotenv(),
    ]
};

module.exports = ({config}) => merge.smart(config, commonConfig);

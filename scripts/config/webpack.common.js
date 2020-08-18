const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { PROJECT_PATH, isDev } = require('../constants');


module.exports = {
    entry: {
        index: path.resolve(PROJECT_PATH, './src/index.tsx'),
    },
    output: {
        filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
        path: path.resolve(PROJECT_PATH, './dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PROJECT_PATH, './public/index.html'),
            filename: 'index.html',
            cache: false,
            minify: isDev ? false : {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                useShortDoctype: true,
            },
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(PROJECT_PATH, './public'),
                    from: '*',
                    to: path.resolve(PROJECT_PATH, './dist'),
                    toType: 'dir',
                },
            ]
        }),
        new WebpackBar({
            name: isDev ? '正在启动' : '正在打包',
            color: '#fa8c16'
        }),
        new HardSourceWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style/[name].[contenthash:8].css',
            chunkFilename: 'style/[name].[contenthash:8].css',
            ignoreOrder: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: isDev,
                            importLoaders: 0
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: isDev,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: isDev
                        }
                    }
                ]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'assets/images',
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'assets/fonts',
                        },
                    },
                ],
            },
            {
                test: /\.(tsx?|js)$/,
                loader: 'babel-loader',
                options: { cacheDirectory: true },
                exclude: /node_mpdules/,
            }
        ]
    },
    optimization: {
        minimize: !isDev,
        minimizer: [
            !isDev && new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    compress: { pure_funcs: ['console.log'] },
                }
            }),
            !isDev && new OptimizeCssAssetsPlugin()
        ].filter(Boolean),
    },
}
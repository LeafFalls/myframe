const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const {BundleAnalyzerPlugin}=require('webpack-bundle-analyzer')

module.exports = merge(common, {
    mode: "production",
    plugins:[
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',      // 开一个本地服务查看报告
            analyzerHost: '10.67.166.137',   // host 设置
            analyzerPort: 8888,   
        })
    ]
})
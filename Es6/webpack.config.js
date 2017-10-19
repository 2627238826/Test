var path = require('path');
var webpack = require('webpack');


module.exports = {
    // devtool: 'cheap-module-source-map',
    //页面入口文件配置
    entry: {
        'main': path.resolve(__dirname, 'main.js'),
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    // 监听文件变化
     watch: true,
    // devServer: {
    //     hot: true, // 告诉 dev-server 我们在使用 HMR
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     publicPath: '/'
    // }
};

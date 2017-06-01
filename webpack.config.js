// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './assets/js/src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './kaec/static/js'),
        publicPath: '/kaec/static/js/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
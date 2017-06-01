// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8000',  // Webpack Dev Server host and port
        'webpack/hot/only-dev-server',  // "only" to prevent reload on syntax errors
        './assets/js/src/index.js',
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
                loader: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const webpack = require('webpack');
const HMRPlugin = new webpack.HotModuleReplacementPlugin();
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry: [__dirname + '/src/index.js', 'webpack-dev-server/client?http://localhost:8080/'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    devServer: {
        historyApiFallback: true
        // hot: true,
        // inline: true
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig /*, HMRPlugin*/]
};

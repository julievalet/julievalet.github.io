var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

// module.exports = {
//     entry: {
//         filename: __dirname + '/app/index.js',
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js[x]?$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader'
//             }
//         ]
//     },
//     output: {
//         filename: 'transformed.js',
//         path: __dirname + '/build'
//     },
//     plugins: [HTMLWebpackPluginConfig]
// };

const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: [
    __dirname + '/app/index.js',
    'webpack-dev-server/client?http://localhost:8080/'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
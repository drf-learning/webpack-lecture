const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: './bundle.js'
  },
  devServer: {
    port: 8888,
    contentBase: './dist'
  }
}

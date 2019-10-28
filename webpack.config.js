const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index'
  },
  output: {
    filename: 'main.js'
  },
  devServer: {
    open: true,
    openPage: 'test.html',
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    inline: true
  }
});

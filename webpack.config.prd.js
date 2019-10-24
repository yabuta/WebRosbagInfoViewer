const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      PRJ: process.env.PRJ,
      API_TEST: false
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          },
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  }
});
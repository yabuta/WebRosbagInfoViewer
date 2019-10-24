const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const src = path.resolve(__dirname, 'src');

module.exports = {
  node: {
    fs: 'empty',
    tls: 'empty'
  },
  entry: {
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@components': `${src}/components`,
      '@constants': `${src}/constants`,
      '@model': `${src}/model`,
      '@redux': `${src}/redux`,
      '@style': `${src}/style`,
      '@utils': `${src}/utils`
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([{ from: 'public/' }]),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['ja']
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

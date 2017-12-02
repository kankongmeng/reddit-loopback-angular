'use strict';

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client/components');

var config = {
  entry: [
    APP_DIR + '/main.jsx',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'react.build.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
};

module.exports = config;

var webpack = require('webpack');
var path = require('path');

module.exports = {
  target: 'web',
  context: path.join(__dirname, '../src/app'),
  entry: './main.js',

  output: {
    path: path.join(__dirname, '../public'),
    pathInfo: true,
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extentions: ['js']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: [
          'babel?presets[]=es2015&presets[]=react'
        ],
        include: path.join(__dirname, '../src/app')
      }
    ]
  }
};

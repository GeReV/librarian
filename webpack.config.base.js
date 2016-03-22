/* eslint strict: 0 */
'use strict';

const path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=100000&name=[name]-[hash].[ext]'
    }],
    // https://github.com/webpack/webpack/issues/138
    // https://github.com/pouchdb/pouchdb/issues/3647
    noParse: /node_modules\/json-schema\/lib\/validate\.js|lie\.js$|\/leveldown\//
  },
  toolbox: {
    theme: 'app/app.theme.scss'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.scss', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [

  ],
  externals: [
    'pouchdb',
    'usb-detection'
  ]
};

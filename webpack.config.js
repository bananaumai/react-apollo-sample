const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
   path: 'dist/',
   filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc.json'
  }
}
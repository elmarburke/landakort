var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './client/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jade$/, loader: "html!jade-html" },

      { test: /\.css$/, loader: "style!css" },

      { test: /\.scss$/, loader: 'style!css!autoprefixer!sass?outputStyle=expanded'},

      { test: /\.png$/, loader: 'url-loader?limit=100000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.DedupePlugin()
  ],
  devtool: 'eval-source-map',
};

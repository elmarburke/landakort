var webpack = require('webpack');
var path = require('path');
var AppCachePlugin = require('appcache-webpack-plugin');

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
      { test: /\.woff($|\?)/, loader: require.resolve('url-loader') + '?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf($|\?)/,  loader: require.resolve('file-loader') },
      { test: /\.eot($|\?)/,  loader: require.resolve('file-loader') },
      { test: /\.svg($|\?)/,  loader: require.resolve('file-loader') },

      { test: /\.png$/, loader: 'url-loader?limit=100000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    
  ],
  devtools: 'source-map'
};

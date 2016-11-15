var webpack = require('webpack');

var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http:/localhost:8080',
    path.join(srcPath, 'app.js'),
  ],
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          },
           {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
      ]
  },
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
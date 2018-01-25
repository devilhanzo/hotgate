/*
 * @Author: puck.solo 
 * @Date: 2017-10-01 01:18:26 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-27 02:52:50
 */

const path = require('path');
const webpack = require('webpack'); // Uncomment on production environment
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyles = new ExtractTextPlugin({
  filename: './css/styles.css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  entry: {
    bundle: './src/js/entry.js',
  },
  output: {
    path: path.resolve(__dirname, 'static/'),
    filename: './js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        use: extractStyles.extract('css-loader?modules&importLoaders=1&localIdentName=[local]'),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          filename: './css/styles.css',
        }),
        include: /react-select/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // Uncomment below for production environment
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    // End env here
    extractStyles,
  ],
};

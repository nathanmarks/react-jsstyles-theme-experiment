const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  context: path.resolve(__dirname),
  entry: {
    'main': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.hbs$/, loader: 'handlebars'},
    ],
  },
  progress: true,
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html.hbs'
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

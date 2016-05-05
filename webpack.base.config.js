const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options) {
  var entry;
  var plugins;

  // If production is true
  if (options.prod) {
    // Entry
    entry = [
      path.resolve(__dirname, 'src/index.js')
    ];
    // Plugins
    plugins = [// Plugins for Webpack
      new webpack.optimize.UglifyJsPlugin({ // Optimize the JavaScript...
        compress: {
          warnings: false // ...but do not show warnings in the console (there is a lot of them)
        }
      }),
      new HtmlWebpackPlugin({
        template: 'index.html', // Move the index.html file...
        minify: { // Minifying it while it is parsed
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        inject: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ];

  // If index is in development
  } else {
    // Entry
    entry = [
      'webpack-dev-server/client?http://localhost:3011', // Needed for hot reloading
      'webpack/hot/only-dev-server', // See above
      path.resolve(__dirname, 'src/index.js') // Start with src/index.js...
    ];
    // Only plugin is the hot module replacement plugin
    plugins = [
      new webpack.HotModuleReplacementPlugin(), // Make hot loading work
      new HtmlWebpackPlugin({
        template: 'src/index.html', // Move the index.html file
        inject: true
      })
    ];
  }

  return {
    devtool: 'cheap-module-eval-source-map',
    entry: entry,
    output: { // Compile into js/build.js
      path: path.resolve(__dirname, 'build'),
      filename: 'js/bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/, // Transform all .js files required somewhere within an entry point...
          loader: 'babel', // ...with the specified loaders...
          exclude: /node_modules/
        }
      ]
    },
    plugins: plugins,
    target: 'web', // Make web variables accessible to webpack, e.g. window
    stats: false, // Don't show stats in the console
    progress: true
  };
};

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');


const serverOptions = {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  // inline: true,
  historyApiFallback: true,
  stats: { colors: true }
};

new WebpackDevServer(webpack(webpackConfig), serverOptions)
  .listen(3000, 'localhost', (err) => {
    if (err) {
      return console.log(err);
    }

    return console.info('Webpack dev server listening at http://localhost:3000/');
  });
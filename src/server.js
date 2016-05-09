/* global webpackIsomorphicTools */
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import http from 'http';
import favicon from 'serve-favicon';
import path from 'path';
import config from './config';
import Html from './helpers/Html';

const app = new express();
const server = new http.Server(app);

app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'static')));

app.use((req, res) => {
  if (__DEVELOPMENT__) { //eslint-disable-line
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh(); //eslint-disable-line
  }

  res.send('<!doctype html>\n' + ReactDOM.renderToString(
    <Html assets={webpackIsomorphicTools.assets()} />
  ));
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}

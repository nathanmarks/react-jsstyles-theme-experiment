import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

// Helpers for debugging
// window.React = React;
// window.Perf = require('react-addons-perf');

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Router />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./Router', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Router /> here rather than require() a <NextApp />.
    const NextRouter = require('./Router').default;
    ReactDOM.render(
      <AppContainer>
        <NextRouter />
      </AppContainer>,
      rootEl
    );
  });
}

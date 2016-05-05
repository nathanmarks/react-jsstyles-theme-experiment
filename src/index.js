import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Helpers for debugging
window.React = React;
window.Perf = require('react-addons-perf');

/**
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
 */
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

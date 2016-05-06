import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Helpers for debugging
window.React = React;
window.Perf = require('react-addons-perf');

/**
 * Render the main app component.
 */
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

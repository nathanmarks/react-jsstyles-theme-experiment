'use strict';

var _reactHotLoader = require('react-hot-loader');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helpers for debugging
// window.React = React;
// window.Perf = require('react-addons-perf');

var rootEl = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(_App2.default, null)
), rootEl);

if (module.hot) {
  module.hot.accept('./App', function () {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    var NextApp = require('./App').default;
    _reactDom2.default.render(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(NextApp, null)
    ), rootEl);
  });
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rootEl, 'rootEl', 'src/index.js');
})();

;
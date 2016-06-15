'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeProvider = require('./styles/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _AppFrame = require('./AppFrame');

var _AppFrame2 = _interopRequireDefault(_AppFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  return _react2.default.createElement(
    _ThemeProvider2.default,
    props,
    _react2.default.createElement(_AppFrame2.default, null)
  );
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', 'src/App.js');
})();

;
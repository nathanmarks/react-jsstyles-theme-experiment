'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelloWorld = function (_Component) {
  (0, _inherits3.default)(HelloWorld, _Component);

  function HelloWorld() {
    (0, _classCallCheck3.default)(this, HelloWorld);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HelloWorld).apply(this, arguments));
  }

  (0, _createClass3.default)(HelloWorld, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'HelloWorld'
      );
    }
  }]);
  return HelloWorld;
}(_react.Component);

var _default = HelloWorld;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HelloWorld, 'HelloWorld', 'src/components/HelloWorld.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/HelloWorld.js');
})();

;
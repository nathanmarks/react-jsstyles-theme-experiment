'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

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

var _styleSheet = require('stylishly/lib/styleSheet');

var _Drawer = require('./components/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('AppDrawer', function () {
  return {
    root: {
      display: 'flex',
      alignItems: 'stretch',
      minHeight: '100vh',
      width: '100vw'
    }
  };
});

var AppDrawer = function (_Component) {
  (0, _inherits3.default)(AppDrawer, _Component);

  function AppDrawer() {
    (0, _classCallCheck3.default)(this, AppDrawer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AppDrawer).apply(this, arguments));
  }

  (0, _createClass3.default)(AppDrawer, [{
    key: 'render',
    value: function render() {
      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(_Drawer2.default, this.props);
    }
  }]);
  return AppDrawer;
}(_react.Component);

AppDrawer.propTypes = {
  children: _react.PropTypes.any,
  open: _react.PropTypes.bool
};
AppDrawer.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = AppDrawer;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/AppDrawer.js');

  __REACT_HOT_LOADER__.register(AppDrawer, 'AppDrawer', 'src/AppDrawer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/AppDrawer.js');
})();

;
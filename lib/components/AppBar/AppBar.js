'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('AppBar', function (theme) {
  var palette = theme.palette;
  var shadows = theme.shadows;


  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      boxShadow: shadows[4],
      backgroundColor: palette.primary[500],
      color: palette.getContrastText(palette.primary[500]),
      '& primary': {
        backgroundColor: palette.primary[500],
        color: palette.getContrastText(palette.primary[500])
      },
      '& accent': {
        backgroundColor: palette.accent.A200,
        color: palette.getContrastText(palette.accent.A200)
      }
    }
  };
});

var AppBar = function (_Component) {
  (0, _inherits3.default)(AppBar, _Component);

  function AppBar() {
    (0, _classCallCheck3.default)(this, AppBar);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AppBar).apply(this, arguments));
  }

  (0, _createClass3.default)(AppBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);


      var classes = this.context.styleManager.render(styleSheet);

      var classNames = (0, _classnames2.default)(classes.root, className);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: classNames }, other),
        children
      );
    }
  }]);
  return AppBar;
}(_react.Component);

AppBar.propTypes = {
  accent: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  primary: _react.PropTypes.bool
};
AppBar.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = AppBar;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/AppBar/AppBar.js');

  __REACT_HOT_LOADER__.register(AppBar, 'AppBar', 'src/components/AppBar/AppBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/AppBar/AppBar.js');
})();

;
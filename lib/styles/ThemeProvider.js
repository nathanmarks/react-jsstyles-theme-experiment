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

var _theme = require('./theme');

var _styleManager = require('stylishly/lib/styleManager');

var _pluginRegistry = require('stylishly/lib/pluginRegistry');

var _stylishlyVendorPrefixer = require('stylishly-vendor-prefixer');

var _stylishlyVendorPrefixer2 = _interopRequireDefault(_stylishlyVendorPrefixer);

var _stylishlyPseudoClasses = require('stylishly-pseudo-classes');

var _stylishlyPseudoClasses2 = _interopRequireDefault(_stylishlyPseudoClasses);

var _stylishlyDescendants = require('stylishly-descendants');

var _stylishlyDescendants2 = _interopRequireDefault(_stylishlyDescendants);

var _stylishlyChained = require('stylishly-chained');

var _stylishlyChained2 = _interopRequireDefault(_stylishlyChained);

var _stylishlyUnits = require('stylishly-units');

var _stylishlyUnits2 = _interopRequireDefault(_stylishlyUnits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = function (_Component) {
  (0, _inherits3.default)(ThemeProvider, _Component);

  function ThemeProvider() {
    (0, _classCallCheck3.default)(this, ThemeProvider);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ThemeProvider).apply(this, arguments));
  }

  (0, _createClass3.default)(ThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var theme = this.theme;
      var styleManager = this.styleManager;

      return {
        theme: theme,
        styleManager: styleManager
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.theme = this.props.theme || (0, _theme.createMuiTheme)();
      this.styleManager = this.props.styleManager || (0, _styleManager.createStyleManager)({
        theme: this.theme,
        pluginRegistry: (0, _pluginRegistry.createPluginRegistry)((0, _stylishlyChained2.default)(), (0, _stylishlyDescendants2.default)(), (0, _stylishlyPseudoClasses2.default)(), (0, _stylishlyUnits2.default)(), (0, _stylishlyVendorPrefixer2.default)())
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ThemeProvider;
}(_react.Component);

ThemeProvider.propTypes = {
  children: _react.PropTypes.node.isRequired,
  styleManager: _react.PropTypes.object,
  theme: _react.PropTypes.object
};
ThemeProvider.childContextTypes = {
  styleManager: _react.PropTypes.object.isRequired,
  theme: _react.PropTypes.object.isRequired
};
var _default = ThemeProvider;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ThemeProvider, 'ThemeProvider', 'src/styles/ThemeProvider.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/styles/ThemeProvider.js');
})();

;
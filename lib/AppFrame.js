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

var _AppBar = require('./components/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('./components/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = require('./components/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _DemoContent = require('./components/DemoContent');

var _DemoContent2 = _interopRequireDefault(_DemoContent);

var _AppDrawer = require('./AppDrawer');

var _AppDrawer2 = _interopRequireDefault(_AppDrawer);

var _Slide = require('./components/Animation/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('AppFrame', function (theme) {
  var palette = theme.palette;
  var typography = theme.typography;

  return {
    '@raw html': { boxSizing: 'border-box' },
    '@raw *, *:before, *:after': { boxSizing: 'inherit' },
    '@raw body': {
      margin: 0,
      background: palette.background.default,
      fontFamily: typography.fontFamily,
      color: palette.text.primary,
      overflowX: 'hidden'
    },
    root: {
      display: 'flex',
      alignItems: 'stretch',
      minHeight: '100vh',
      width: '100vw'
    }
  };
});

var AppFrame = function (_Component) {
  (0, _inherits3.default)(AppFrame, _Component);

  function AppFrame() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AppFrame);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(AppFrame)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      drawerOpen: false
    }, _this.handleDrawerOpen = function () {
      return _this.setState({ drawerOpen: true });
    }, _this.handleDrawerClose = function () {
      return _this.setState({ drawerOpen: false });
    }, _this.handleDrawerToggle = function () {
      return _this.setState({ drawerOpen: !_this.state.drawerOpen });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AppFrame, [{
    key: 'render',
    value: function render() {
      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _AppBar2.default,
          null,
          _react2.default.createElement(
            _Toolbar2.default,
            { style: { justifyContent: 'flex-end' } },
            _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleDrawerToggle },
              'menu'
            ),
            _react2.default.createElement(
              _Toolbar.ToolbarTitle,
              null,
              'Style Experiment'
            )
          )
        ),
        _react2.default.createElement(_AppDrawer2.default, {
          onRequestClose: this.handleDrawerClose,
          open: this.state.drawerOpen
        }),
        _react2.default.createElement(
          _Slide2.default,
          null,
          _react2.default.createElement(_DemoContent2.default, null)
        )
      );
    }
  }]);
  return AppFrame;
}(_react.Component);

AppFrame.propTypes = {
  children: _react.PropTypes.any
};
AppFrame.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = AppFrame;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/AppFrame.js');

  __REACT_HOT_LOADER__.register(AppFrame, 'AppFrame', 'src/AppFrame.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/AppFrame.js');
})();

;
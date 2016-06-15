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

var _Animation = require('../Animation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('IconButton', function (theme) {
  var palette = theme.palette;

  return {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      width: 48,
      height: 48,
      padding: 0,
      outline: 'none',
      border: 10,
      borderRadius: '50%',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      color: 'inherit'
    },
    primary: {
      color: palette.primary[500]
    },
    accent: {
      color: palette.accent.A200
    }
  };
});

var IconButton = function (_Component) {
  (0, _inherits3.default)(IconButton, _Component);

  function IconButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(IconButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.ripple = undefined, _this.handleMouseDown = (0, _Animation.createRippleHandler)(_this, 'MouseDown', 'start'), _this.handleMouseUp = (0, _Animation.createRippleHandler)(_this, 'MouseUp', 'stop'), _this.handleTouchStart = (0, _Animation.createRippleHandler)(_this, 'TouchStart', 'start'), _this.handleTouchEnd = (0, _Animation.createRippleHandler)(_this, 'TouchEnd', 'stop'), _this.handleBlur = (0, _Animation.createRippleHandler)(_this, 'Blur', 'stop'), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IconButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var ripple = _props.ripple;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'ripple']);

      var classes = this.context.styleManager.render(styleSheet);
      return _react2.default.createElement(
        'button',
        (0, _extends3.default)({
          onBlur: this.handleBlur,
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onMouseUp: this.handleMouseUp,
          onTouchEnd: this.handleTouchEnd,
          onTouchStart: this.handleTouchStart,
          className: (0, _classnames2.default)(classes.root, className)
        }, other),
        _react2.default.createElement(
          'span',
          { className: 'material-icons' },
          children
        ),
        ripple && _react2.default.createElement(_Animation.Ripple, { center: true, ref: function ref(c) {
            return _this2.ripple = c;
          } })
      );
    }
  }]);
  return IconButton;
}(_react.Component);

IconButton.propTypes = {
  /**
   * Can be used to pass a `FontIcon` element as the icon for the button.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, the element will be disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * If false, the element's ripple effect will be disabled.
   */
  ripple: _react.PropTypes.bool
};
IconButton.defaultProps = {
  ripple: true
};
IconButton.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default2 = IconButton;
exports.default = _default2;
var _default = IconButton;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/IconButton/IconButton.js');

  __REACT_HOT_LOADER__.register(IconButton, 'IconButton', 'src/components/IconButton/IconButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/IconButton/IconButton.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'src/components/IconButton/IconButton.js');
})();

;
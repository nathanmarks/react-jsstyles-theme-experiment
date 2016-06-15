'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleSheet = require('stylishly/lib/styleSheet');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Animation = require('../Animation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createButtonColorRule(main, contrast, hover) {
  return {
    color: main,
    '& raised': {
      color: contrast,
      backgroundColor: main,
      '&:hover': {
        backgroundColor: hover
      }
    }
  };
}

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('Button', function (theme) {
  var palette = theme.palette;
  var shadows = theme.shadows;
  var transitions = theme.transitions;
  var typography = theme.typography;


  return {
    base: (0, _extends3.default)({}, typography.button, {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 88,
      height: 36,
      padding: '0px 16px',
      outline: 'none',
      border: 10,
      borderRadius: 2,
      cursor: 'pointer',
      overflow: 'hidden',
      color: palette.text.primary,
      backgroundColor: 'transparent',
      transition: transitions.create(),
      '&:hover': {
        backgroundColor: palette.text.divider
      }
    }),
    raised: {
      color: palette.getContrastText(palette.grey[300]),
      backgroundColor: palette.grey[300],
      boxShadow: shadows[2],
      '&:hover': {
        backgroundColor: palette.grey.A100
      },
      '&:active': {
        boxShadow: shadows[8]
      }
    },
    primary: createButtonColorRule(palette.primary[500], palette.getContrastText(palette.primary[500]), palette.primary[700]),
    accent: createButtonColorRule(palette.accent.A200, palette.getContrastText(palette.accent.A200), palette.accent.A400)
  };
});

var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Button)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.ripple = undefined, _this.handleMouseDown = (0, _Animation.createRippleHandler)(_this, 'MouseDown', 'start'), _this.handleMouseUp = (0, _Animation.createRippleHandler)(_this, 'MouseUp', 'stop'), _this.handleTouchStart = (0, _Animation.createRippleHandler)(_this, 'TouchStart', 'start'), _this.handleTouchEnd = (0, _Animation.createRippleHandler)(_this, 'TouchEnd', 'stop'), _this.handleBlur = (0, _Animation.createRippleHandler)(_this, 'Blur', 'stop'), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _ClassNames,
          _this2 = this;

      var _props = this.props;
      var accent = _props.accent;
      var children = _props.children;
      var className = _props.className;
      var onBlur = _props.onBlur;
      var // eslint-disable-line no-unused-vars
      onMouseDown = _props.onMouseDown;
      var // eslint-disable-line no-unused-vars
      onMouseLeave = _props.onMouseLeave;
      var // eslint-disable-line no-unused-vars
      onMouseUp = _props.onMouseUp;
      var // eslint-disable-line no-unused-vars
      onTouchEnd = _props.onTouchEnd;
      var // eslint-disable-line no-unused-vars
      onTouchStart = _props.onTouchStart;
      var // eslint-disable-line no-unused-vars
      primary = _props.primary;
      var raised = _props.raised;
      var ripple = _props.ripple;
      var other = (0, _objectWithoutProperties3.default)(_props, ['accent', 'children', 'className', 'onBlur', 'onMouseDown', 'onMouseLeave', 'onMouseUp', 'onTouchEnd', 'onTouchStart', 'primary', 'raised', 'ripple']);


      var classes = this.context.styleManager.render(styleSheet);

      var classNames = (0, _classnames2.default)((_ClassNames = {}, (0, _defineProperty3.default)(_ClassNames, classes.base, true), (0, _defineProperty3.default)(_ClassNames, classes.raised, raised), (0, _defineProperty3.default)(_ClassNames, classes.primary, primary), (0, _defineProperty3.default)(_ClassNames, classes.accent, accent), _ClassNames), className);

      return _react2.default.createElement(
        'button',
        (0, _extends3.default)({
          onBlur: this.handleBlur,
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onMouseUp: this.handleMouseUp,
          onTouchEnd: this.handleTouchEnd,
          onTouchStart: this.handleTouchStart,
          className: classNames
        }, other),
        children,
        ripple && _react2.default.createElement(_Animation.Ripple, { ref: function ref(c) {
            return _this2.ripple = c;
          } })
      );
    }
  }]);
  return Button;
}(_react.Component);

Button.propTypes = {
  accent: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  onBlur: _react.PropTypes.func,
  onMouseDown: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  primary: _react.PropTypes.bool,
  raised: _react.PropTypes.bool,
  ripple: _react.PropTypes.bool
};
Button.defaultProps = {
  ripple: true,
  raised: false
};
Button.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = Button;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createButtonColorRule, 'createButtonColorRule', 'src/components/Button/Button.js');

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Button/Button.js');

  __REACT_HOT_LOADER__.register(Button, 'Button', 'src/components/Button/Button.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Button/Button.js');
})();

;
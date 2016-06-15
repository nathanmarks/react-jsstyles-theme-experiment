'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleSheet = require('stylishly/lib/styleSheet');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Slide = require('../Animation/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('Drawer', function () {
  return {
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      height: '100vh',
      width: '280px',
      flex: '1 0 280px',
      '&:focus': {
        outline: 'none'
      }
    }
  };
});

var Drawer = function (_Component) {
  (0, _inherits3.default)(Drawer, _Component);

  function Drawer() {
    (0, _classCallCheck3.default)(this, Drawer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Drawer).apply(this, arguments));
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var container = _props.container;
      var open = _props.open;
      var paperClassName = _props.paperClassName;
      var transition = _props.transition;
      var zDepth = _props.zDepth;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'container', 'open', 'paperClassName', 'transition', 'zDepth']);


      var classes = this.context.styleManager.render(styleSheet);

      var drawer = _react2.default.createElement(
        _Paper2.default,
        {
          zDepth: zDepth,
          rounded: false,
          className: (0, _classnames2.default)(classes.paper, (0, _defineProperty3.default)({}, classes.open, open), paperClassName)
        },
        children
      );

      var containerProps = (0, _extends3.default)({
        className: className,
        open: open
      }, other);

      // return React.cloneElement(transition, {active: open}, drawer);

      return _react2.default.createElement(container, containerProps, _react2.default.cloneElement(transition, { active: open }, drawer));
    }
  }]);
  return Drawer;
}(_react.Component);

Drawer.propTypes = {
  /**
   * The contents of the `Drawer`
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  container: _react.PropTypes.func,
  open: _react.PropTypes.bool,
  /**
   * The CSS class name of the paper element.
   */
  paperClassName: _react.PropTypes.string,
  transition: _react.PropTypes.node,
  zDepth: _react.PropTypes.number
};
Drawer.defaultProps = {
  container: _Modal2.default,
  open: false,
  transition: _react2.default.createElement(_Slide2.default, null)
};
Drawer.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = Drawer;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Drawer/Drawer.js');

  __REACT_HOT_LOADER__.register(Drawer, 'Drawer', 'src/components/Drawer/Drawer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Drawer/Drawer.js');
})();

;
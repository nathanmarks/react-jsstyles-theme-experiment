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

var _stylishly = require('stylishly');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Transition = require('react-overlays/lib/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const triggerBrowserReflow = (node) => node.offsetHeight;

var styleSheet = exports.styleSheet = (0, _stylishly.createStyleSheet)('Fade', function (theme) {
  return {
    fade: {
      opacity: 0,
      transition: theme.transitions.create()
    },
    in: {
      opacity: 1
    }
  };
});

var Fade = function (_Component) {
  (0, _inherits3.default)(Fade, _Component);

  function Fade() {
    (0, _classCallCheck3.default)(this, Fade);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Fade).apply(this, arguments));
  }

  (0, _createClass3.default)(Fade, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var active = _props.active;
      var children = _props.children;
      var className = _props.className;
      var other = (0, _objectWithoutProperties3.default)(_props, ['active', 'children', 'className']);

      var classes = this.context.styleManager.render(styleSheet);
      var classNames = (0, _classnames2.default)(classes.fade, className);

      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          'in': active,
          className: classNames,
          enteredClassName: classes.in,
          enteringClassName: classes.in,
          timeout: 500,
          transitionAppear: true
        }, other),
        children
      );
    }
  }]);
  return Fade;
}(_react.Component);

Fade.propTypes = {
  /**
   * Used to control the transition. Set to true to reveal the component.
   */
  active: _react.PropTypes.bool,
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
};
Fade.defaultProps = {
  active: false
};
Fade.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = Fade;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Animation/Fade.js');

  __REACT_HOT_LOADER__.register(Fade, 'Fade', 'src/components/Animation/Fade.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Animation/Fade.js');
})();

;
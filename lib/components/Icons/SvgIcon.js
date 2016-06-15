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

var _stylishly = require('stylishly');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _stylishly.createStyleSheet)('SvgIcon', function (theme) {
  var transitions = theme.transitions;


  return {
    base: {
      display: 'inline-block',
      fill: 'currentColor',
      height: 24,
      width: 24,
      userSelect: 'none',
      transition: transitions.create()
    }
  };
});

var SvgIcon = function (_Component) {
  (0, _inherits3.default)(SvgIcon, _Component);

  function SvgIcon() {
    (0, _classCallCheck3.default)(this, SvgIcon);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SvgIcon).apply(this, arguments));
  }

  (0, _createClass3.default)(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var viewBox = _props.viewBox;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'viewBox']);


      var classes = this.context.styleManager.render(styleSheet);

      var classNames = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.base, true), className);

      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({
          className: classNames,
          viewBox: viewBox
        }, other),
        children
      );
    }
  }]);
  return SvgIcon;
}(_react.Component);

SvgIcon.muiName = 'SvgIcon';
SvgIcon.propTypes = {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Override the inline style of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Allows you to redifine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: _react.PropTypes.string
};
SvgIcon.defaultProps = {
  viewBox: '0 0 24 24'
};
SvgIcon.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = SvgIcon;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Icons/SvgIcon.js');

  __REACT_HOT_LOADER__.register(SvgIcon, 'SvgIcon', 'src/components/Icons/SvgIcon.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Icons/SvgIcon.js');
})();

;
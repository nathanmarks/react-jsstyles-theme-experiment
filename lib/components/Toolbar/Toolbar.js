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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleSheet = require('stylishly/lib/styleSheet');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('Toolbar', function (theme) {
  return (0, _defineProperty3.default)({
    root: theme.mixins.gutters({
      display: 'flex',
      alignItems: 'center',
      height: 56
    })
  }, theme.breakpoints.up('sm'), {
    root: {
      height: 64
    }
  });
});

var Toolbar = function (_Component) {
  (0, _inherits3.default)(Toolbar, _Component);

  function Toolbar() {
    (0, _classCallCheck3.default)(this, Toolbar);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Toolbar).apply(this, arguments));
  }

  (0, _createClass3.default)(Toolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);


      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
        children
      );
    }
  }]);
  return Toolbar;
}(_react.Component);

Toolbar.propTypes = {
  /**
   * Can be a `ToolbarGroup` to render a group of related items.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string
};
Toolbar.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = Toolbar;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Toolbar/Toolbar.js');

  __REACT_HOT_LOADER__.register(Toolbar, 'Toolbar', 'src/components/Toolbar/Toolbar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Toolbar/Toolbar.js');
})();

;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = ToolbarTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleSheet = require('stylishly/lib/styleSheet');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('ToolbarTitle', function (theme) {
  return {
    root: (0, _extends3.default)({}, theme.typography.title, {
      marginLeft: 24
    })
  };
});

function ToolbarTitle(props, context) {
  var className = props.className;
  var el = props.el;
  var other = (0, _objectWithoutProperties3.default)(props, ['className', 'el']);

  var classes = context.styleManager.render(styleSheet);
  var titleProps = (0, _assign2.default)(other, { className: (0, _classnames2.default)(classes.root, className) });
  return _react2.default.createElement(el ? el : 'h1', titleProps);
}

ToolbarTitle.propTypes = {
  className: _react.PropTypes.string,
  el: _react.PropTypes.string
};

ToolbarTitle.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Toolbar/ToolbarTitle.js');

  __REACT_HOT_LOADER__.register(ToolbarTitle, 'ToolbarTitle', 'src/components/Toolbar/ToolbarTitle.js');
})();

;
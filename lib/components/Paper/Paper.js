'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = Paper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleSheet = require('stylishly/lib/styleSheet');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('Paper', function (theme) {
  var palette = theme.palette;

  var shadows = {};

  theme.shadows.forEach(function (shadow, index) {
    shadows['dp-' + index] = {
      boxShadow: shadow
    };
  });

  return (0, _extends3.default)({
    root: {
      backgroundColor: palette.background.paper
    }
  }, shadows);
});

function Paper(props, context) {
  var className = props.className;
  var zDepth = props.zDepth;
  var other = (0, _objectWithoutProperties3.default)(props, ['className', 'zDepth']);

  var classes = context.styleManager.render(styleSheet);

  var classNames = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, 'dp-' + (zDepth >= 0 || 0), true), className);

  return _react2.default.createElement('div', (0, _extends3.default)({ className: classNames }, other));
}

Paper.propTypes = {
  className: _react.PropTypes.string,
  zDepth: _react.PropTypes.number
};

Paper.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Paper/Paper.js');

  __REACT_HOT_LOADER__.register(Paper, 'Paper', 'src/components/Paper/Paper.js');
})();

;
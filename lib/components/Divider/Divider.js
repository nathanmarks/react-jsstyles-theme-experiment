'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Divider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleSheet = require('stylishly/lib/styleSheet');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('Divider', function (theme) {
  var palette = theme.palette;


  return {
    root: {
      height: 1,
      marginTop: -1,
      backgroundColor: palette.text.divider
    }
  };
});

function Divider(props, context) {
  var className = props.className;
  var other = (0, _objectWithoutProperties3.default)(props, ['className']);

  var classes = context.styleManager.render(styleSheet);
  return _react2.default.createElement('hr', (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other));
}

Divider.propTypes = {
  className: _react.PropTypes.string
};

Divider.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Divider/Divider.js');

  __REACT_HOT_LOADER__.register(Divider, 'Divider', 'src/components/Divider/Divider.js');
})();

;
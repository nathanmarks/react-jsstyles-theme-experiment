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

var _cancel = require('../svg-icons/navigation/cancel');

var _cancel2 = _interopRequireDefault(_cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('Chip', function (theme) {
  var palette = theme.palette;
  var shadows = theme.shadows;
  var transitions = theme.transitions;
  var typography = theme.typography;


  return {
    base: (0, _extends3.default)({}, typography.chip, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      outline: 'none',
      border: 0,
      color: palette.getContrastText(palette.grey[300]),
      backgroundColor: palette.grey[300],
      boxShadow: shadows[0],
      borderRadius: 16,
      whiteSpace: 'nowrap',
      width: 'fit-content',
      transition: transitions.create()
    }),
    clickable: {
      '&:active': {
        boxShadow: shadows[1]
      },
      '&:hover, &:active': {
        backgroundColor: palette.grey.A100
      },
      cursor: 'pointer'
    },
    avatar: {
      marginRight: -4
    },
    label: {
      color: palette.text,
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap'
    },
    deleteIcon: {
      fill: palette.grey[500],
      '&:hover': {
        fill: palette.grey[600]
      },
      cursor: 'pointer',
      margin: '0 4px 0 -8px'
    }
  };
});

var Chip = function (_Component) {
  (0, _inherits3.default)(Chip, _Component);

  function Chip() {
    (0, _classCallCheck3.default)(this, Chip);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Chip).apply(this, arguments));
  }

  (0, _createClass3.default)(Chip, [{
    key: 'render',
    value: function render() {
      var _ClassNames;

      var _props = this.props;
      var avatarClassName = _props.avatarClassName;
      var theChildren = _props.children;
      var className = _props.className;
      var deleteIconClassName = _props.deleteIconClassName;
      var labelClassName = _props.labelClassName;
      var onRequestDelete = _props.onRequestDelete;
      var onTouchTap = _props.onTouchTap;
      var other = (0, _objectWithoutProperties3.default)(_props, ['avatarClassName', 'children', 'className', 'deleteIconClassName', 'labelClassName', 'onRequestDelete', 'onTouchTap']);


      var children = theChildren;

      var classes = this.context.styleManager.render(styleSheet);

      var classNames = (0, _classnames2.default)((_ClassNames = {}, (0, _defineProperty3.default)(_ClassNames, classes.base, true), (0, _defineProperty3.default)(_ClassNames, classes.clickable, onTouchTap), _ClassNames), className);

      var avatarClassNames = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.avatar, true), avatarClassName);

      var labelClassNames = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.label, true), labelClassName);

      var deleteIconclassNames = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.deleteIcon, onRequestDelete), deleteIconClassName);

      var deleteIcon = onRequestDelete ? _react2.default.createElement(_cancel2.default, {
        className: deleteIconclassNames,
        onTouchTap: onRequestDelete
      }) : null;

      var childCount = _react2.default.Children.count(children);

      var avatar = null;
      // If the first child is an avatar, extract it and style it
      if (childCount > 1) {
        children = _react2.default.Children.toArray(children);

        if (_react2.default.isValidElement(children[0]) && children[0].type.muiName === 'Avatar') {
          avatar = children.shift();

          avatar = _react2.default.cloneElement(avatar, {
            size: 32,
            className: avatarClassNames
          });
        }
      }
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: classNames }, other),
        avatar,
        _react2.default.createElement(
          'span',
          { className: labelClassNames },
          children
        ),
        deleteIcon
      );
    }
  }]);
  return Chip;
}(_react.Component);

Chip.propTypes = {
  /**
   * CSS `className` of the Avatar.
   */
  avatarClassName: _react.PropTypes.string,
  /**
   * Used to render elements inside the Chip.
   */
  children: _react.PropTypes.node,
  /**
   * CSS `className` of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * CSS `className` of the delete icon element.
   */
  deleteIconClassName: _react.PropTypes.string,
  /**
   * CSS `className` of the label.
   */
  labelClassName: _react.PropTypes.string,
  /**
   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   * @param {object} event `touchTap` event targeting the element.
   */
  onRequestDelete: _react.PropTypes.func,
  /**
   * Callback function fired when the `Chip` element is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the element.
   */
  onTouchTap: _react.PropTypes.func
};
Chip.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = Chip;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Chip/Chip.js');

  __REACT_HOT_LOADER__.register(Chip, 'Chip', 'src/components/Chip/Chip.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Chip/Chip.js');
})();

;
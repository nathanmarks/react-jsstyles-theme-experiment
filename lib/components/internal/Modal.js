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

var _Modal = require('react-overlays/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _styleSheet = require('stylishly/lib/styleSheet');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Fade = require('../Animation/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _colors = require('../../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('Modal', function (theme) {
  return {
    modal: {
      display: 'flex',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: theme.zIndex.dialog,
      top: 0,
      left: 0
    },
    overlay: {
      zIndex: -1,
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: _colors.lightBlack
    }
  };
});

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Modal).apply(this, arguments));
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var onRequestClose = _props.onRequestClose;
      var open = _props.open;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'onRequestClose', 'open']);


      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        _Modal2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.modal, className),
          backdropClassName: classes.overlay,
          onHide: onRequestClose,
          show: open,
          transition: _Fade2.default
        }, other),
        children
      );
    }
  }]);
  return Modal;
}(_react.Component);

Modal.propTypes = {
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  onRequestClose: _react.PropTypes.func,
  open: _react.PropTypes.bool
};
Modal.defaultProps = {
  open: false
};
Modal.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = Modal;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/internal/Modal.js');

  __REACT_HOT_LOADER__.register(Modal, 'Modal', 'src/components/internal/Modal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/internal/Modal.js');
})();

;
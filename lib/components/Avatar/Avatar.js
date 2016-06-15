'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var styleSheet = exports.styleSheet = (0, _stylishly.createStyleSheet)('Avatar', function (theme) {
  var palette = theme.palette;


  return {
    base: {
      color: 'white',
      fill: 'white',
      lineHeight: 1,
      backgroundColor: palette.grey[400],
      userSelect: 'none',
      display: 'flex',
      flex: '0 0 auto',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '50%',
      overflow: 'hidden'
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    }
  };
});

var Avatar = function (_Component) {
  (0, _inherits3.default)(Avatar, _Component);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Avatar).apply(this, arguments));
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var size = _props.size;
      var src = _props.src;
      var style = _props.style;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'size', 'src', 'style']);


      var classes = this.context.styleManager.render(styleSheet);

      var classNames = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.base, true), className);

      var styles = {
        root: {
          fontSize: size / 2,
          height: size,
          width: size
        },
        icon: {
          width: size * 0.6,
          height: size * 0.6
        }
      };

      var cloneChildren = void 0;

      if (_react2.default.isValidElement(children)) {
        cloneChildren = _react2.default.cloneElement(children, {
          style: (0, _assign2.default)(styles.icon, children.props.style)
        });
      } else {
        cloneChildren = children;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: classNames,
          style: (0, _assign2.default)(styles.root, style)
        }, other),
        src && _react2.default.createElement('img', { className: classes.img, src: src }),
        cloneChildren
      );
    }
  }]);
  return Avatar;
}(_react.Component);

Avatar.muiName = 'Avatar';
Avatar.propTypes = {
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root `div` or `img` element.
   */
  className: _react.PropTypes.string,
  /**
   * The size of the avatar in pixels.
   */
  size: _react.PropTypes.number,
  /**
   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
   */
  src: _react.PropTypes.string,
  /**
   * Override the inline style of the root element.
   */
  style: _react.PropTypes.object
};
Avatar.defaultProps = {
  size: 40
};
Avatar.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = Avatar;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Avatar/Avatar.js');

  __REACT_HOT_LOADER__.register(Avatar, 'Avatar', 'src/components/Avatar/Avatar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Avatar/Avatar.js');
})();

;
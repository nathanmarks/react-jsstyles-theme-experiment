'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

exports.createRippleHandler = createRippleHandler;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styleSheet = require('stylishly/lib/styleSheet');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRippleHandler(instance, eventName, action) {
  return function handleEvent(event) {
    if (instance.ripple) {
      instance.ripple[action](event);
    }
    if (instance.props && typeof instance.props['handle' + eventName] === 'function') {
      instance.props['on' + eventName](event);
    }
  };
}

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('Ripple', function (theme) {
  return {
    container: {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      zIndex: 0
    },
    ripple: {
      width: 50,
      height: 50,
      left: 0,
      top: 0,
      opacity: 0,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      background: 'currentColor',
      pointerEvents: 'none'
    },
    animating: {
      transition: theme.transitions.multi(['transform', 'opacity'], '500ms')
    },
    visible: {
      opacity: 0.3
    }
  };
});

var Ripple = function (_Component) {
  (0, _inherits3.default)(Ripple, _Component);

  function Ripple() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Ripple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Ripple)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      rippleStart: false,
      rippleVisible: false
    }, _this.ignoringMouseDown = false, _this.rippleSize = 0, _this.rippleX = 0, _this.rippleY = 0, _this.start = function (event) {
      // Get the size of the ripple
      var elem = _reactDom2.default.findDOMNode(_this);
      var rect = elem.getBoundingClientRect();
      var ignoringMouseDown = false;

      if (event.type === 'mousedown' && _this.ignoringMouseDown) {
        _this.ignoringMouseDown = ignoringMouseDown;
      } else {
        if (event.type === 'touchstart') {
          ignoringMouseDown = true;
        }

        var rippleX = void 0;
        var rippleY = void 0;

        // Check if we are handling a keyboard click.
        if (event.clientX === 0 && event.clientY === 0 || _this.props.center) {
          rippleX = Math.round(rect.width / 2);
          rippleY = Math.round(rect.height / 2);
        } else {
          var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
          var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
          rippleX = Math.round(clientX - rect.left);
          rippleY = Math.round(clientY - rect.top);
        }

        _this.ignoringMouseDown = ignoringMouseDown;
        _this.rippleX = rippleX;
        _this.rippleY = rippleY;
        _this.rippleVisible = true;
        _this.rippleStart = true;

        if (_this.props.center) {
          _this.rippleSize = (rect.width + rect.height) / 2;
        } else {
          var sizeX = Math.max(Math.abs(elem.clientWidth - rippleX), rippleX) * 2 + 2;
          var sizeY = Math.max(Math.abs(elem.clientHeight - rippleY), rippleY) * 2 + 2;
          _this.rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
        }

        _this.setState({
          rippleVisible: true,
          rippleStart: true
        }, function () {
          window.requestAnimationFrame(function () {
            _this.setState({ rippleStart: false });
          });
        });
      }
    }, _this.stop = function () {
      _this.setState({
        rippleVisible: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Ripple, [{
    key: 'getRippleStyles',
    value: function getRippleStyles() {
      var rippleStart = this.state.rippleStart;
      var rippleSize = this.rippleSize;
      var rippleX = this.rippleX;
      var rippleY = this.rippleY;


      var scale = void 0;

      if (rippleStart) {
        scale = 'scale(0.0001, 0.0001)';
      } else {
        scale = 'scale(1, 1)';
      }
      var offset = 'translate(' + rippleX + 'px, ' + rippleY + 'px)';

      var transformString = 'translate(-50%, -50%) ' + offset + ' ' + scale;

      var rippleStyles = {
        width: rippleSize + 'px',
        height: rippleSize + 'px',
        transform: transformString
      };

      return rippleStyles;
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames;

      var className = this.props.className;
      var _state = this.state;
      var rippleStart = _state.rippleStart;
      var rippleVisible = _state.rippleVisible;

      var classes = this.context.styleManager.render(styleSheet);

      var rippleClassName = (0, _classnames2.default)((_ClassNames = {}, (0, _defineProperty3.default)(_ClassNames, classes.ripple, true), (0, _defineProperty3.default)(_ClassNames, classes.visible, rippleVisible), (0, _defineProperty3.default)(_ClassNames, classes.animating, !rippleStart), _ClassNames));

      return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(classes.container, className) },
        _react2.default.createElement('span', { className: rippleClassName, style: this.getRippleStyles() })
      );
    }
  }]);
  return Ripple;
}(_react.Component);

Ripple.propTypes = {
  center: _react.PropTypes.bool,
  className: _react.PropTypes.string
};
Ripple.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = Ripple;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createRippleHandler, 'createRippleHandler', 'src/components/Animation/Ripple.js');

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Animation/Ripple.js');

  __REACT_HOT_LOADER__.register(Ripple, 'Ripple', 'src/components/Animation/Ripple.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Animation/Ripple.js');
})();

;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _LinearProgress = require('./LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinearProgressExampleDeterminate = function (_React$Component) {
  (0, _inherits3.default)(LinearProgressExampleDeterminate, _React$Component);

  function LinearProgressExampleDeterminate() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LinearProgressExampleDeterminate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(LinearProgressExampleDeterminate)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      completed: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LinearProgressExampleDeterminate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timer = setTimeout(function () {
        return _this2.progress(5);
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'progress',
    value: function progress(completed) {
      var _this3 = this;

      if (completed > 100) {
        this.setState({ completed: 100 });
      } else {
        (function () {
          _this3.setState({ completed: completed });
          var diff = Math.random() * 10;
          _this3.timer = setTimeout(function () {
            return _this3.progress(completed + diff);
          }, 1000);
        })();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_LinearProgress2.default, { mode: 'determinate', value: this.state.completed });
    }
  }]);
  return LinearProgressExampleDeterminate;
}(_react2.default.Component);

var _default = LinearProgressExampleDeterminate;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LinearProgressExampleDeterminate, 'LinearProgressExampleDeterminate', 'src/components/LinearProgressExampleDeterminate.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/LinearProgressExampleDeterminate.js');
})();

;
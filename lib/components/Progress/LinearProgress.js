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

var _styleSheet = require('stylishly/lib/styleSheet');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  var rangeValue = max - min;
  var relValue = Math.round(clampedValue / rangeValue * 10000) / 10000;
  return relValue * 100;
}

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('LinearProgress', function (theme) {
  var palette = theme.palette;
  var transitions = theme.transitions;


  return {
    base: {
      position: 'relative',
      height: 4,
      display: 'block',
      width: '100%',
      backgroundColor: palette.grey[400],
      borderRadius: 2,
      margin: 0,
      overflow: 'hidden'
    },
    bar: {
      height: '100%'
    },
    barDeterminate: {
      backgroundColor: palette.primary[400],
      transition: transitions.create('width', '.3s', null, 'linear')
    },
    barFragment1: {
      position: 'absolute',
      backgroundColor: palette.primary[400],
      top: 0,
      left: 0,
      bottom: 0,
      transition: transitions.create('all', '840ms', null, 'cubic-bezier(0.650, 0.815, 0.735, 0.395)')
    },
    barFragment2: {
      position: 'absolute',
      backgroundColor: palette.primary[400],
      top: 0,
      left: 0,
      bottom: 0,
      transition: transitions.create('all', '840ms', null, 'cubic-bezier(0.165, 0.840, 0.440, 1.000)')
    }
  };
});

var LinearProgress = function (_Component) {
  (0, _inherits3.default)(LinearProgress, _Component);

  function LinearProgress() {
    (0, _classCallCheck3.default)(this, LinearProgress);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LinearProgress).apply(this, arguments));
  }

  (0, _createClass3.default)(LinearProgress, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.styleManager.attach(styleSheet);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timers = {};

      this.timers.bar1 = this.barUpdate('bar1', 0, this.refs.bar1, [[-35, 100], [100, -90]]);

      this.timers.bar2 = setTimeout(function () {
        _this2.barUpdate('bar2', 0, _this2.refs.bar2, [[-200, 100], [107, -8]]);
      }, 850);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timers.bar1);
      clearTimeout(this.timers.bar2);
      this.context.styleManager.detach(styleSheet);
    }
  }, {
    key: 'barUpdate',
    value: function barUpdate(id, step, barElement, stepValues) {
      var _this3 = this;

      if (this.props.mode !== 'indeterminate') return;

      step = step || 0; // eslint-disable-line no-param-reassign
      step %= 4; // eslint-disable-line no-param-reassign

      // const right = this.context.muiTheme.isRtl ? 'left' : 'right';
      // const left = this.context.muiTheme.isRtl ? 'right' : 'left';
      var right = 'right';
      var left = 'left';

      if (step === 0) {
        barElement.style[left] = stepValues[0][0] + '%';
        barElement.style[right] = stepValues[0][1] + '%';
      } else if (step === 1) {
        barElement.style.transitionDuration = '840ms';
      } else if (step === 2) {
        barElement.style[left] = stepValues[1][0] + '%';
        barElement.style[right] = stepValues[1][1] + '%';
      } else if (step === 3) {
        barElement.style.transitionDuration = '0ms';
      }
      this.timers[id] = setTimeout(function () {
        return _this3.barUpdate(id, step + 1, barElement, stepValues);
      }, 420);
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames2;

      var _props = this.props;
      var className = _props.className;
      var max = _props.max;
      var min = _props.min;
      var mode = _props.mode;
      var value = _props.value;
      var other = (0, _objectWithoutProperties3.default)(_props, ['className', 'max', 'min', 'mode', 'value']);


      var classes = this.context.styleManager.getClasses(styleSheet);

      var classNames = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.base, true), className);

      var barClassNames = (0, _classnames2.default)((_ClassNames2 = {}, (0, _defineProperty3.default)(_ClassNames2, classes.bar, true), (0, _defineProperty3.default)(_ClassNames2, classes.barDeterminate, mode === 'determinate'), _ClassNames2));

      var bar1ClassNames = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.barFragment1, mode === 'indeterminate'));

      var bar2ClassNames = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.barFragment2, mode === 'indeterminate'));

      var barStyle = mode === 'determinate' ? { width: getRelativeValue(value, min, max) + '%' } : {};

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: classNames }, other),
        _react2.default.createElement(
          'div',
          { className: barClassNames, style: barStyle },
          _react2.default.createElement('div', { ref: 'bar1', className: bar1ClassNames }),
          _react2.default.createElement('div', { ref: 'bar2', className: bar2ClassNames })
        )
      );
    }
  }]);
  return LinearProgress;
}(_react.Component);

LinearProgress.propTypes = {
  /**
   * The css class name of the root `div`.
   */
  className: _react.PropTypes.string,
  /**
   * The max value of progress, only works in determinate mode.
   */
  max: _react.PropTypes.number,
  /**
   * The min value of progress, only works in determinate mode.
   */
  min: _react.PropTypes.number,
  /**
   * The mode of show your progress, indeterminate for when
   * there is no value for progress.
   */
  mode: _react.PropTypes.oneOf(['determinate', 'indeterminate']),
  /**
   * The value of progress, only works in determinate mode.
   */
  value: _react.PropTypes.number
};
LinearProgress.defaultProps = {
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100
};
LinearProgress.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default = LinearProgress;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getRelativeValue, 'getRelativeValue', 'src/components/Progress/LinearProgress.js');

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Progress/LinearProgress.js');

  __REACT_HOT_LOADER__.register(LinearProgress, 'LinearProgress', 'src/components/Progress/LinearProgress.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Progress/LinearProgress.js');
})();

;
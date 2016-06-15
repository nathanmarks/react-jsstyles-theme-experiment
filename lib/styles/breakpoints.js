'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = createBreakpoints;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createBreakpoints() {
  var breakpoints = arguments.length <= 0 || arguments[0] === undefined ? {
    xs: 360,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : arguments[0];
  var unit = arguments.length <= 1 || arguments[1] === undefined ? 'px' : arguments[1];
  var step = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  var keys = (0, _keys2.default)(breakpoints);
  var values = keys.map(function (n) {
    return breakpoints[n];
  });

  function up(name) {
    return '@media (min-width:' + breakpoints[name] + unit + ')';
  }

  function down(name) {
    if (keys.indexOf(name) === values.length - 1) {
      return undefined;
    }
    return '@media (max-width:' + breakpoints[name] + unit + ')';
  }

  function only(name) {
    var keyIndex = keys.indexOf(name);
    if (keyIndex === values.length - 1) {
      return up(name);
    }
    return between(name, name);
  }

  function between(start, end) {
    var startIndex = keys.indexOf(start);
    var endIndex = keys.indexOf(end);
    return '@media (min-width:' + values[startIndex] + unit + ') and (max-width:' + (values[endIndex + 1] - step) + unit + ')';
  }

  return { keys: keys, values: values, up: up, down: down, only: only };
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createBreakpoints, 'createBreakpoints', 'src/styles/breakpoints.js');
})();

;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shades = exports.dark = exports.light = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.createMuiTheme = createMuiTheme;
exports.createPalette = createPalette;

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _hashObject = require('../utils/hashObject');

var _hashObject2 = _interopRequireDefault(_hashObject);

var _colorManipulator = require('./colorManipulator');

var _colors = require('./colors');

var _shadows = require('./shadows');

var _shadows2 = _interopRequireDefault(_shadows);

var _transitions = require('./transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('./breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

var _zIndex = require('./zIndex');

var _zIndex2 = _interopRequireDefault(_zIndex);

var _mixins = require('./mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMuiTheme() {
  var palette = arguments.length <= 0 || arguments[0] === undefined ? createPalette() : arguments[0];
  var typography = arguments.length <= 1 || arguments[1] === undefined ? (0, _typography2.default)(palette) : arguments[1];
  var breakpoints = arguments.length <= 2 || arguments[2] === undefined ? (0, _breakpoints2.default)() : arguments[2];
  var mixins = arguments.length <= 3 || arguments[3] === undefined ? (0, _mixins2.default)(breakpoints) : arguments[3];

  for (var _len = arguments.length, more = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    more[_key - 4] = arguments[_key];
  }

  var properties = _merge2.default.apply(undefined, [{
    palette: palette,
    typography: typography,
    shadows: _shadows2.default,
    transitions: _transitions2.default,
    mixins: mixins,
    breakpoints: breakpoints,
    zIndex: _zIndex2.default
  }].concat(more));

  if (!properties.hasOwnProperty('id')) {
    properties.id = (0, _hashObject2.default)(properties);
  }

  var muiTheme = (0, _extends3.default)({}, properties);

  return muiTheme;
}

function createPalette() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$primary = _ref.primary;
  var primary = _ref$primary === undefined ? _colors.indigo : _ref$primary;
  var _ref$accent = _ref.accent;
  var accent = _ref$accent === undefined ? _colors.pink : _ref$accent;
  var _ref$dark = _ref.dark;
  var dark = _ref$dark === undefined ? false : _ref$dark;

  var type = dark ? 'dark' : 'light';

  return {
    type: type,
    text: shades[type].text,
    background: shades[type].background,
    shades: shades,
    primary: primary,
    accent: accent,
    grey: _colors.grey,
    // functions
    getContrastText: getContrastText
  };
}

var light = exports.light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)'
  },
  background: {
    default: _colors.grey[50],
    paper: _colors.white,
    appBar: _colors.grey[100],
    status: _colors.grey[300]
  }
};

var dark = exports.dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.70)',
    disabled: 'rgba(255, 255, 255, 0.50)',
    hint: 'rgba(255, 255, 255, 0.50)',
    icon: 'rgba(255, 255, 255, 0.50)',
    divider: 'rgba(255, 255, 255, 0.12)'
  },
  background: {
    default: '#303030',
    paper: _colors.grey[800],
    appBar: _colors.grey[900],
    status: _colors.black
  }
};

var shades = exports.shades = { dark: dark, light: light };

function getContrastText(color) {
  if ((0, _colorManipulator.getContrastRatio)(color, _colors.black) < 7) {
    return dark.text.primary;
  }
  return light.text.primary;
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createMuiTheme, 'createMuiTheme', 'src/styles/theme.js');

  __REACT_HOT_LOADER__.register(createPalette, 'createPalette', 'src/styles/theme.js');

  __REACT_HOT_LOADER__.register(light, 'light', 'src/styles/theme.js');

  __REACT_HOT_LOADER__.register(dark, 'dark', 'src/styles/theme.js');

  __REACT_HOT_LOADER__.register(shades, 'shades', 'src/styles/theme.js');

  __REACT_HOT_LOADER__.register(getContrastText, 'getContrastText', 'src/styles/theme.js');
})();

;
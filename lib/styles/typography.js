'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createTypography;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConstants = {
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightMedium: 500
};

function createTypography(palette) {
  var constants = arguments.length <= 1 || arguments[1] === undefined ? defaultConstants : arguments[1];

  return (0, _extends3.default)({}, constants, {
    display4: {
      fontSize: 112,
      fontWeight: constants.fontWeightLight,
      fontFamily: constants.fontFamily
    },
    display3: {
      fontSize: 56,
      fontWeight: constants.fontWeightNormal,
      fontFamily: constants.fontFamily
    },
    display2: {
      fontSize: 45,
      fontWeight: constants.fontWeightNormal,
      fontFamily: constants.fontFamily
    },
    display1: {
      fontSize: 34,
      fontWeight: constants.fontWeightNormal,
      fontFamily: constants.fontFamily
    },
    headline: {
      fontSize: 24,
      fontWeight: constants.fontWeightNormal,
      fontFamily: constants.fontFamily
    },
    title: {
      fontSize: 20,
      fontWeight: constants.fontWeightMedium,
      fontFamily: constants.fontFamily
    },
    subheading: {
      fontSize: 16,
      fontWeight: constants.fontWeightNormal,
      fontFamily: constants.fontFamily
    },
    body2: {
      fontSize: 14,
      fontWeight: constants.fontWeightMedium,
      fontFamily: constants.fontFamily
    },
    body1: {
      fontSize: 14,
      fontWeight: constants.fontWeightNormal,
      fontFamily: constants.fontFamily
    },
    caption: {
      fontSize: 12,
      fontWeight: constants.fontWeightNormal,
      fontFamily: constants.fontFamily
    },
    chip: {
      fontSize: 13,
      fontWeight: constants.fontWeightNormal,
      fontFamily: constants.fontFamily
    },
    button: {
      fontSize: 14,
      fontWeight: constants.fontWeightMedium,
      fontFamily: constants.fontFamily,
      textTransform: 'uppercase'
    }
  });
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultConstants, 'defaultConstants', 'src/styles/typography.js');

  __REACT_HOT_LOADER__.register(createTypography, 'createTypography', 'src/styles/typography.js');
})();

;
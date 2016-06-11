import merge from 'lodash/merge';
import hashObject from '../utils/hashObject';
import {getContrastRatio} from './colorManipulator';
import {indigo, pink, grey, black, white, lightText, darkText} from './colors';
import shadows from './shadows';
import transitions from './transitions';
import createTypography from './typography';

export function createMuiTheme(
  palette = createPalette(),
  typography = createTypography(palette),
  ...more
) {
  const properties = merge({
    palette,
    typography,
    shadows,
    transitions,
  }, ...more);

  if (!properties.hasOwnProperty('id')) {
    properties.id = hashObject(properties);
  }

  const muiTheme = {...properties};

  return muiTheme;
}

export function createPalette({
  primary = indigo,
  accent = pink,
  dark = false,
} = {}) {
  return {
    primary,
    accent,
    grey,
    text: dark ? lightText : darkText,
    background: dark ? '#303030' : grey[50],
    paperBackground: dark ? grey[800] : white,
    darkerBackground: dark ? grey[900] : grey[100],
    getContrastText,
  };
}

function getContrastText(color) {
  if (getContrastRatio(color, black) < 7) {
    return lightText.primary;
  }
  return darkText.primary;
}

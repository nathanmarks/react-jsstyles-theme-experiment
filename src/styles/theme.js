import merge from 'lodash.merge';
import hashObject from '../utils/hashObject';
import {createPalette} from './colors';
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

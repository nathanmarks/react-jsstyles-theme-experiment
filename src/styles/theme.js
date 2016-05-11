import merge from 'lodash.merge';
import hashObject from '../utils/hashObject';
import { createPalette } from './colors';
import shadows from './shadows';
import transitions from './transitions';
import typography from './typography';

export function createMuiTheme(palette = createPalette(), ...more) {
  const properties = merge({
    palette,
    shadows,
    transitions,
    typography,
  }, ...more);

  if (!properties.hasOwnProperty('id')) {
    properties.id = hashObject(properties);
  }

  const muiTheme = { ...properties };

  return muiTheme;
}

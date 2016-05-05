import merge from 'lodash.merge';
import hashObject from '../utils/hashObject';
import { createPalette } from './colors';
import { transitions, typography } from './themeVariables';

export function createMuiTheme(palette = createPalette(), ...more) {
  const properties = merge({
    palette,
    transitions,
    typography,
  }, ...more);

  if (!properties.hasOwnProperty('id')) {
    properties.id = hashObject(properties);
  }

  return Object.assign(Object.create(muiTheme), properties);
}

const muiTheme = {};

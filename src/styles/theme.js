import merge from 'lodash.merge';
import hashObject from '../utils/hashObject';
import { createPalette } from './colors';
import transitions from './transitions';

export function createMuiTheme(
  palette = createPalette(),
  ...more
) {
  const properties = merge({
    palette,
    transitions,
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  }, ...more);

  if (!properties.hasOwnProperty('id')) {
    properties.id = hashObject(properties);
  }

  return Object.assign(Object.create(muiTheme), properties);
}

const muiTheme = {};

import { create as createJss } from 'jss';
import extend from 'jss-extend';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import find from 'lodash.find';
import hashObject from '../utils/hashObject';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Creates a styleManager object responsible
 * for managing the styleSheets for the application.
 *
 * @param  {Object} options.jss   - JSS Instance
 * @param  {Object} options.theme - Theme Object
 * @return {Object}               - The styleManager object
 */
export function createStyleManager({
  jss = createJss().use(extend(), nested(), camelCase(), defaultUnit()),
  theme = {},
  sheetMap = []
} = {}) {
  const styleManager = {};
  styleManager.attach = (styleSheet) => attach(jss, theme, sheetMap, styleSheet);
  styleManager.detach = (styleSheet) => detach(sheetMap, styleSheet);
  styleManager.getSheets = () => getSheets(jss);
  styleManager.getClasses = (styleSheet) => getClasses(sheetMap, styleSheet);
  return styleManager;
}

export function getSheets(jss) {
  return jss.sheets.registry;
}

export function getClasses(sheetMap, styleSheet) {
  return find(sheetMap, { styleSheet }).sheet.classes;
}

/**
 * Attaches a styleSheet object
 *
 * @param  {Object}  jss        - JSS Instance
 * @param  {Object}  theme      - Theme object
 * @param  {WeakMap} sheetMap   - Tracks the sheets in play and the # of instances
 * @param  {Object}  styleSheet - The styleSheet object to be attached
 * @return {Object}             - An object @TODO has classes etc
 */
export function attach(jss, theme, sheetMap, styleSheet) {
  let mapping = find(sheetMap, { styleSheet });

  if (!mapping) {
    mapping = {
      styleSheet,
      sheet: createJssSheet(jss, theme, styleSheet),
      counter: 0
    };
    sheetMap.push(mapping);
  }

  if (mapping.counter === 0) {
    mapping.sheet.attach();
  }

  mapping.counter = mapping.counter + 1;

  return {
    classes: mapping.sheet.classes
  };
}

/**
 * Detaches a styleSheet
 *
 * @param  {WeakMap} sheetMap   - Tracks the sheets in play and the # of instances
 * @param  {Object}  styleSheet - The styleSheet object to be attached
 */
export function detach(sheetMap, styleSheet) {
  const mapping = find(sheetMap, { styleSheet });
  const counter = mapping.counter - 1;

  if (counter) {
    mapping.counter = counter;
  } else {
    mapping.sheet.detach();
    const sheetIndex = sheetMap.indexOf(mapping);
    if (sheetIndex !== -1) {
      sheetMap.splice(sheetIndex, 1);
    }
  }
}

/**
 * Creates a JSS sheet object from a theme
 * and styleSheet using the given JSS instance.
 *
 * @param  {Object}  jss        - JSS Instance
 * @param  {Object}  theme      - Theme object
 * @param  {Object}  styleSheet - The styleSheet object to be attached
 * @return {Object}             - The JSS sheet
 */
export function createJssSheet(jss, theme, styleSheet) {
  const { ruleDefinitions, classes } = styleSheet.getRules(theme);

  const hash = hashObject(ruleDefinitions);
  const options = { meta: hash, named: false };

  if (canUseDOM) {
    const element = document.querySelector(`style[data-meta="${hash}"]`);
    if (element !== null) {
      options.element = element;
    }
  }

  const sheet = jss.createStyleSheet(ruleDefinitions, options);
  sheet.classes = classes;
  return sheet;
}


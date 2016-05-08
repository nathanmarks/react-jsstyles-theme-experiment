import { create as createJss } from 'jss';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import partial from 'lodash.partial';
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
  jss = createJss().use(nested(), camelCase(), defaultUnit()),
  theme = {},
  sheetMap = new WeakMap()
} = {}) {
  const styleManager = {};
  styleManager.attach = partial(attach, jss, theme, sheetMap);
  styleManager.detach = partial(detach, sheetMap);
  styleManager.getSheets = partial(getSheets, jss);
  return styleManager;
}

function getSheets(jss) {
  return jss.sheets.registry;
}

// function getClasses(sty)

/**
 * Attaches a styleSheet object
 *
 * @param  {Object}  jss        - JSS Instance
 * @param  {Object}  theme      - Theme object
 * @param  {WeakMap} sheetMap   - Tracks the sheets in play and the # of instances
 * @param  {Object}  styleSheet - The styleSheet object to be attached
 * @return {Object}             - An object @TODO has classes etc
 */
function attach(jss, theme, sheetMap, styleSheet) {
  let mapping = sheetMap.get(styleSheet);

  if (!mapping) {
    mapping = {
      sheet: createJssSheet(jss, theme, styleSheet),
      counter: 0
    };
    sheetMap.set(styleSheet, mapping);
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
function detach(sheetMap, styleSheet) {
  const mapping = sheetMap.get(styleSheet);
  const counter = mapping.counter - 1;

  if (counter) {
    mapping.counter = counter;
  } else {
    mapping.sheet.detach();
    sheetMap.delete(styleSheet);
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
function createJssSheet(jss, theme, styleSheet) {
  const { ruleDefinitions, classes } = styleSheet.getRuleDefinitions(theme);

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


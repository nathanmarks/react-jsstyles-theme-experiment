import { create as createJss } from 'jss';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import hashObject from '../utils/hashObject';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export function createStyleManager({
  jss = createJss().use(nested(), camelCase(), defaultUnit()),
  theme = {}
} = {}) {
  return Object.create(styleManager, {
    sheetMap: { value: new WeakMap() },
    jss: { value: jss },
    theme: { value: theme }
  });
}

const styleManager = {
  /**
   * Attaches a styleSheet object
   */
  attach(styleSheet) {
    const counter = this.sheetMap.get(styleSheet) || 0;

    if (counter === 0) {
      if (!styleSheet.hasOwnProperty('sheet') || styleSheet.sheet.options.jss !== this.jss) {
        styleSheet.sheet = this.createJssSheet(styleSheet);
      }
      styleSheet.sheet.attach();
    }

    this.sheetMap.set(styleSheet, counter + 1);
  },

  /**
   * Detach a styleSheet object
   *
   * @param  {Object} styleSheet - styleSheet Object
   */
  detach(styleSheet) {
    const counter = this.sheetMap.get(styleSheet) - 1;
    if (counter) {
      this.sheetMap.set(styleSheet, counter);
    } else {
      styleSheet.sheet.detach();
      this.sheetMap.delete(styleSheet);
    }
  },

  /**
   * Create stylesheet
   */
  createJssSheet(styleSheet) {
    const ruleDefinitions = styleSheet.getRuleDefinitions(this.theme);
    const hash = hashObject(ruleDefinitions);
    const options = { meta: hash, named: false };

    if (canUseDOM) {
      const element = document.querySelector(`style[data-meta="${hash}"]`);
      if (element !== null) {
        options.element = element;
      }
    }

    return this.jss.createStyleSheet(ruleDefinitions, options);
  }
};

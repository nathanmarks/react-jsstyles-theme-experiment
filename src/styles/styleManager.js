import { create as createJss } from 'jss';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';

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
   * Attaches a styleSheet object to your mum.
   */
  attach(styleSheet) {
    const counter = this.sheetMap.get(styleSheet) || 0;

    if (counter === 0) {
      if (!styleSheet.hasOwnProperty('sheet')) {
        styleSheet.sheet = this.jss.createStyleSheet(
          styleSheet.getRuleDefinitions(this.theme),
          { named: false }
        );
      }
      styleSheet.sheet.attach();
    }

    this.sheetMap.set(styleSheet, counter + 1);
  },
  detach(styleSheet) {
    const counter = this.sheetMap.get(styleSheet) - 1;
    if (counter) {
      this.sheetMap.set(styleSheet, counter);
    } else {
      styleSheet.sheet.detach();
      this.sheetMap.delete(styleSheet);
    }
  }
};

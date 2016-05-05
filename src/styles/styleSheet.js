
export function createStyleSheet(name, createStyles, options = { global: false, named: true }) {
  return Object.create(styleSheet, {
    name: { value: name },
    options: { value: options },
    createStyles: { value: createStyles },
    count: { value: 0, writeable: true }
  });
}

const styleSheet = {
  getRuleDefinitions(theme) {
    return this.ruleDefinitions || this.createRuleDefinitions(theme);
  },

  createRuleDefinitions(theme) {
    const styles = this.createStyles(theme);
    this.classes = {};
    this.ruleDefinitions = {};
    Object.keys(styles).forEach((key) => {
      const selector = this.options.global ? key : `${this.name}__${key}--${theme.id}`;
      this.classes[key] = selector;
      this.ruleDefinitions[this.options.named ? `.${selector}` : selector] = styles[key];
    });
    return this.ruleDefinitions;
  }
};

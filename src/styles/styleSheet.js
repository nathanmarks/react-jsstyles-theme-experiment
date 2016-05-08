export function createStyleSheet(name, createStyles, options = {}) {
  const styleSheet = {};
  styleSheet.name = name;
  styleSheet.createStyles = createStyles;
  styleSheet.options = Object.assign({ global: false, named: true }, options);
  styleSheet.getRuleDefinitions = getRuleDefinitions;
  return styleSheet;
}

function getRuleDefinitions(theme) {
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

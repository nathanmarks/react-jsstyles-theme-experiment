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
  const classes = {};
  const ruleDefinitions = {};

  Object.keys(styles).forEach((key) => {
    const selector = this.options.global ? key : `${this.name}__${key}--${theme.id}`;
    classes[key] = selector;
    ruleDefinitions[this.options.named ? `.${selector}` : selector] = styles[key];
  });

  return { ruleDefinitions, classes };
}

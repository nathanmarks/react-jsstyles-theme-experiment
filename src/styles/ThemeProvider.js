import { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import { createMuiTheme } from './theme';
import { createStyleManager } from './styleManager';

const styleSheet = createStyleSheet('theme', (theme) => {
  const { palette, typography } = theme;
  return {
    body: {
      background: palette.background,
      fontFamily: typography.fontFamily,
      color: palette.text.primary
    }
  };
}, { global: true, named: false });

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    styleManager: PropTypes.object,
    theme: PropTypes.object
  };

  static childContextTypes = {
    styleManager: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  };

  getChildContext() {
    const { theme, styleManager } = this;
    return {
      theme: theme,
      styleManager: styleManager
    };
  }

  componentWillMount() {
    this.theme = this.props.theme || createMuiTheme();
    this.styleManager = this.props.styleManager || createStyleManager({ theme: this.theme });
    this.styleManager.attach(styleSheet);
  }

  componentWillUnmount() {
    this.styleManager.detach(styleSheet);
  }

  render() {
    return this.props.children;
  }
}

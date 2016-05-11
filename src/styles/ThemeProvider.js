import { Component, PropTypes } from 'react';
import { createMuiTheme } from './theme';
import { createStyleManager } from './styleManager';

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
  }

  render() {
    return this.props.children;
  }
}

import React, { Component, PropTypes } from 'react';
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

const themeProvider = (
  theme = createMuiTheme(),
  styleManager = createStyleManager({ theme })
) => (ComposedComponent) => {
  return class ThemeProvider extends Component {
    static childContextTypes = {
      styleManager: PropTypes.object.isRequired,
      theme: PropTypes.object.isRequired
    };

    getChildContext() {
      return {
        theme: theme || createMuiTheme(),
        styleManager: styleManager || createStyleManager({ theme }),
      };
    }

    componentWillMount() {
      styleManager.attach(styleSheet);
    }

    componentWillUnmount() {
      styleManager.detach(styleSheet);
    }

    render() {
      return <ComposedComponent />;
    }
  };
};

export default themeProvider;

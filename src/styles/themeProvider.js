import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import { createMuiTheme } from './theme';
import { createStyleManager } from './styleManager';

const styleSheet = createStyleSheet('theme', ({ palette }) => ({
  body: {
    background: palette.background,
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    color: palette.text.primary
  }
}), { global: true, named: false });

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

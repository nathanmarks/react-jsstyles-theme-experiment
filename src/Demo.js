import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from './styles/styleSheet';
import AppBar from './components/AppBar';
import AppContent from './components/AppContent';

export const globalStyleSheet = createStyleSheet('global', (theme) => {
  const { palette, typography } = theme;
  return {
    body: {
      background: palette.background,
      fontFamily: typography.fontFamily,
      color: palette.text.primary,
      margin: 0,
      padding: 0
    }
  };
}, { global: true, named: false });

export default class Demo extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.context.styleManager.attach(globalStyleSheet);
  }

  componentWillUnmount() {
    this.context.styleManager.detach(globalStyleSheet);
  }

  render() {
    return (
      <div>
        <AppBar>
          <span>Material-UI Style Experiment</span>
        </AppBar>
        <AppContent />
      </div>
    );
  }
}

export default Demo;

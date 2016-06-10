import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import AppBar from './components/AppBar';
import AppContent from './components/AppContent';

export const styleSheet = createStyleSheet('Demo', (theme) => {
  const {palette, typography} = theme;
  return {
    '@raw html': {
      boxSizing: 'border-box',
    },
    '@raw *, *:before, *:after': {
      boxSizing: 'inherit',
    },
    '@raw body': {
      background: palette.background,
      fontFamily: typography.fontFamily,
      color: palette.text.primary,
    },
  };
});

export default class Demo extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    this.context.styleManager.render(styleSheet);

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

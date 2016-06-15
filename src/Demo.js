import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import AppBar from './components/AppBar';
import Toolbar, {ToolbarTitle} from './components/Toolbar';
import IconButton from './components/IconButton';
import DemoContent from './components/DemoContent';

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
      background: palette.background.default,
      fontFamily: typography.fontFamily,
      color: palette.text.primary,
    },
    '@raw h1': {
      ...typography.display4,
    },
    '@raw h2': {
      ...typography.display3,
    },
    '@raw h3': {
      ...typography.display2,
    },
    '@raw h4': {
      ...typography.display1,
    },
    '@raw h5': {
      ...typography.headline,
    },
    '@raw h6': {
      ...typography.title,
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
          <Toolbar>
            <IconButton>menu</IconButton>
            <ToolbarTitle>Style Experiment</ToolbarTitle>
          </Toolbar>
        </AppBar>
        <DemoContent />
      </div>
    );
  }
}

export default Demo;

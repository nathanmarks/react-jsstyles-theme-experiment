import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import AppBar from './AppBar';
import Button from './Button';

export const styleSheet = createStyleSheet('demo', (theme) => {
  const { palette, typography } = theme;
  return {
    body: {
      background: palette.background,
      fontFamily: typography.fontFamily,
      color: palette.text.primary
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
    this.context.styleManager.attach(styleSheet);
  }

  componentWillUnmount() {
    this.context.styleManager.detach(styleSheet);
  }

  render() {
    return (
      <div>
        <AppBar />
        <div>
          <h4>JS Styles</h4>
          <Button>Hello World</Button>
        </div>
      </div>
    );
  }
}

export default Demo;

import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import AppBar from './AppBar';
import Button from './Button';

export const globalStyleSheet = createStyleSheet('global', (theme) => {
  const { palette, typography } = theme;
  return {
    body: {
      background: palette.background,
      fontFamily: typography.fontFamily,
      color: palette.text.primary
    }
  };
}, { global: true, named: false });

export const styleSheet = createStyleSheet('demo', () => {
  return {
    buttons: {
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      margin: 30
    }
  };
});

export default class Demo extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.context.styleManager.attach(globalStyleSheet);
    this.styleSheet = this.context.styleManager.attach(styleSheet);
  }

  componentWillUnmount() {
    this.context.styleManager.detach(globalStyleSheet);
    this.context.styleManager.detach(styleSheet);
  }

  render() {
    const { classes } = this.styleSheet;

    return (
      <div>
        <AppBar />
        <div>
          <h4>JS Styles</h4>
          <div className={classes.buttons}>
            <div className={classes.button}>
              <Button>Hello World</Button>
            </div>
            <div className={classes.button}>
              <Button primary={true}>Hello World</Button>
            </div>
            <div className={classes.button}>
              <Button accent={true}>Hello World</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;

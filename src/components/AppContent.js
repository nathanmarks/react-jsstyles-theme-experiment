import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import Button from './Button';

export const styleSheet = createStyleSheet('app-content', () => {
  return {
    appContent: {
      marginTop: 64
    },
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
    this.context.styleManager.attach(styleSheet);
  }

  componentWillUnmount() {
    this.context.styleManager.detach(styleSheet);
  }

  render() {
    const classes = this.context.styleManager.getClasses(styleSheet);

    return (
      <div className={classes.appContent}>
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
    );
  }
}

export default Demo;

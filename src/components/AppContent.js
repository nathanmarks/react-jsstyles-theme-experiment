import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import Button from './Button';

export const styleSheet = createStyleSheet('AppContent', () => {
  return {
    base: {
      margin: '128px 32px 0',
    },
    componentRow: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 10,
    },
    components: {
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      margin: 6,
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
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.base}>
        <h4>JS Styles</h4>
        <div className={classes.components}>
          <div className={classes.componentRow}>
            <Button className={classes.button} primary={true}>Hello World</Button>
            <Button className={classes.button} accent={true}>Click Here</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;

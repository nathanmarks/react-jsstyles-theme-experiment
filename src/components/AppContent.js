import React, {Component, PropTypes} from 'react';
import ClassNames from 'classnames';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import Button from './Button';

export const styleSheet = createStyleSheet('AppContent', (theme) => {
  const {shadows} = theme;

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
    shadowButton: {
      'base &': {
        boxShadow: shadows[15],
      },
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
    const shadowButton = ClassNames(classes.button, classes.shadowButton);

    return (
      <div className={classes.base}>
        <h4>JS Styles</h4>
        <div className={classes.components}>
          <div className={classes.componentRow}>
            <Button className={classes.button} accent={true}>Hello World</Button>
            <Button className={shadowButton} accent={true}>Whoa Shadow</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;

import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import Button from './Button';
import Avatar from './Avatar';

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
    component: {
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
        <h4>Button</h4>
        <div className={classes.components}>
          <div className={classes.componentRow}>
            <Button className={classes.component} primary={true}>Hello World</Button>
            <Button className={classes.component} accent={true}>Click Here</Button>
          </div>
        </div>
        <h4>Avatar</h4>
        <div className={classes.components}>
          <div className={classes.componentRow}>
            <Avatar
              src="https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/73.jpg"
              className={classes.component}
            />
            <Avatar
              src="https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/128.jpg"
              size={80}
              className={classes.component}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;

import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import Button from './Button';
import Avatar from './Avatar';
import FileFolder from './svg-icons/file/folder';

import {
  orange,
  deepOrange,
  pink,
  purple,
} from '../styles/colors';

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
            <Button className={classes.component} primary={true}>Primary</Button>
            <Button className={classes.component} accent={true}>Accent</Button>
            <Button className={classes.component}>Default</Button>
          </div>
        </div>
        <h4>Avatar</h4>
        <div className={classes.components}>
          <div className={classes.componentRow}>
            <Avatar
              src="https://avatars1.githubusercontent.com/nathanmarks?&s=40"
              className={classes.component}
            />
            <Avatar
              src="https://avatars1.githubusercontent.com/nathanmarks?&s=30"
              size={30}
              className={classes.component}
            />
            <Avatar
              className={classes.component}
            >
              <FileFolder />
            </Avatar>
            <Avatar
              size={30}
              className={classes.component}
              style={{backgroundColor: pink[400]}}
            >
              <FileFolder style={{fill: orange[200]}} />
            </Avatar>
            <Avatar className={classes.component}>A</Avatar>
            <Avatar
              size={30}
              className={classes.avatar}
              style={{color: deepOrange[300], backgroundColor: purple[500]}}
            >
              A
            </Avatar>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;

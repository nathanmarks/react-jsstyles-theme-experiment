import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import Button from './Button';
import Chip from './Chip';
import Avatar from './Avatar';
import SvgIconFace from './svg-icons/action/face';

export const styleSheet = createStyleSheet('app-content', () => {
  return {
    appContent: {
      marginTop: 64
    },
    componentRow: {
      display: 'flex',
      justifyContent: 'center'
    },
    components: {
      display: 'flex',
      flexDirection: 'column',
    },
    component: {
      margin: 6
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
        <div className={classes.components}>
          <div className={classes.componentRow}>
            <div className={classes.component}>
              <Button>Hello World</Button>
            </div>
            <div className={classes.component}>
              <Button primary={true}>Hello World</Button>
            </div>
            <div className={classes.component}>
              <Button accent={true}>Hello World</Button>
            </div>
          </div>
          <div className={classes.componentRow}>
            <div className={classes.component}>
              <Chip>Chips Ahoy!</Chip>
            </div>
            <div className={classes.component}>
              <Chip
                onRequestDelete={() => {}}
              >
                <Avatar>MB</Avatar>
                Deletable Chip
              </Chip>
            </div>
            <div className={classes.component}>
              <Chip
                onTouchTap={() => {}}
                onRequestDelete={() => {}}
              >
                <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"></Avatar>
                Clickable Chip
              </Chip>
            </div>
            <div className={classes.component}>
              <Chip
                onTouchTap={() => {}}
                onRequestDelete={() => {}}
              >
                <Avatar><SvgIconFace color="#444" /></Avatar>
                SvgIcon Chip
              </Chip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;

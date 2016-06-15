import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import Avatar from './Avatar';
import Button from './Button';
import Chip from './Chip';
import FileFolder from './svg-icons/file/folder';
import Face from './svg-icons/action/face';

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
    svgIcon: {
      color: '#444',
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
        <h6>Avatar</h6>
        <div className={classes.components}>
          <div className={classes.componentRow}>
            <Avatar
              src="https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/73.jpg"
              className={classes.component}
            />
            <Avatar
              src="https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/48.jpg"
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
              className={classes.component}
              style={{color: deepOrange[300], backgroundColor: purple[500]}}
            >
              A
            </Avatar>
          </div>
        </div>
        <h6>Raised Button</h6>
        <div className={classes.components}>
          <div className={classes.componentRow}>
            <Button className={classes.component} primary={true}>Primary</Button>
            <Button className={classes.component} accent={true}>Accent</Button>
            <Button className={classes.component}>Default</Button>
          </div>
        </div>
        <h6>Flat Button</h6>
        <div className={classes.components}>
          <div className={classes.componentRow}>
            <Button className={classes.component} type="flat" primary={true}>Primary</Button>
            <Button className={classes.component} type="flat" accent={true}>Accent</Button>
            <Button className={classes.component} type="flat">Default</Button>
          </div>
        </div>
        <h6>Chip</h6>
        <div className={classes.componentRow}>
          <Chip className={classes.component}>Chips Ahoy!</Chip>
          <Chip
            onRequestDelete={() => {}}
            className={classes.component}
          >
            <Avatar>MB</Avatar>
            Deletable Chip
          </Chip>
          <Chip
            onTouchTap={() => {}}
            onRequestDelete={() => {}}
            className={classes.component}
          >
            <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
            Clickable Chip
          </Chip>
          <Chip
            onTouchTap={() => {}}
            onRequestDelete={() => {}}
            className={classes.component}
          >
            <Avatar><Face className={classes.svgIcon} /></Avatar>
            SvgIcon Chip
          </Chip>
        </div>
      </div>
    );
  }
}

export default Demo;

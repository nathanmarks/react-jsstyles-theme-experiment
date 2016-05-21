import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from '../styles/styleSheet';
import Button from './Button';
import Chip from './Chip';
import Avatar from './Avatar';
import LinearProgress from './LinearProgress';
import LinearProgressExampleDeterminate from './LinearProgressExampleDeterminate';
import FileFolder from './svg-icons/file/folder';

import {
  orange,
  deepOrange,
  pink,
  purple,
} from '../styles/colors';

import SvgIconFace from './svg-icons/action/face';

export const styleSheet = createStyleSheet('app-content', () => {
  return {
    appContent: {
      margin: 64,
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
    chip: {
      margin: 6,
    },
    avatar: {
      margin: 6,
    },
    svgIcon: {
      fill: '#444',
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
            <Avatar
              src="http://www.material-ui.com/images/kerem-128.jpg"
              className={classes.avatar}
            />
            <Avatar
              src="http://www.material-ui.com/images/kerem-128.jpg"
              size={30}
              className={classes.avatar}
            />
            <Avatar
              className={classes.avatar}
            >
              <FileFolder />
            </Avatar>
            <Avatar
              size={30}
              className={classes.avatar}
              style={{backgroundColor: pink[400]}}
            >
              <FileFolder style={{fill: orange[200]}} />
            </Avatar>
            <Avatar className={classes.avatar}>A</Avatar>
            <Avatar
              size={30}
              className={classes.avatar}
              style={{color: deepOrange[300], backgroundColor: purple[500]}}
            >
              A
            </Avatar>
          </div>
          <div className={classes.componentRow}>
            <Button className={classes.button}>Hello World</Button>
            <Button primary={true} className={classes.button}>Hello World</Button>
            <Button accent={true} className={classes.button}>Hello World</Button>
          </div>
          <div className={classes.componentRow}>
            <Chip className={classes.chip}>Chips Ahoy!</Chip>
            <Chip
              onRequestDelete={() => {}}
              className={classes.chip}
            >
              <Avatar>MB</Avatar>
              Deletable Chip
            </Chip>
            <Chip
              onTouchTap={() => {}}
              onRequestDelete={() => {}}
              className={classes.chip}
            >
              <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
              Clickable Chip
            </Chip>
            <Chip
              onTouchTap={() => {}}
              onRequestDelete={() => {}}
              className={classes.chip}
            >
              <Avatar><SvgIconFace className={classes.svgIcon} /></Avatar>
              SvgIcon Chip
            </Chip>
          </div>
          <div className={classes.componentRow}>
            <LinearProgress mode="indeterminate" />
          </div>
          <div className={classes.componentRow}>
            <LinearProgressExampleDeterminate />
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;

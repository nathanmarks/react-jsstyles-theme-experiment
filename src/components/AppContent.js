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
      flexDirection: 'column'
    },
    button: {
      margin: 6
    },
    chip: {
      margin: 6
    },
    svgIcon: {
      fill: '#444'
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
              <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"></Avatar>
              Clickable Chip
            </Chip>
            <Chip
              onTouchTap={() => {}}
              onRequestDelete={() => {}}
              className={classes.chip}
            >
              <Avatar><SvgIconFace className={classes.svgIcon}/></Avatar>
              SvgIcon Chip
            </Chip>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;

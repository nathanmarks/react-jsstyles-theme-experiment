import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import AppBar from './components/AppBar';
import Toolbar, {ToolbarTitle} from './components/Toolbar';
import IconButton from './components/IconButton';
import DemoContent from './components/DemoContent';
import AppDrawer from './AppDrawer';
import Slide from './components/Animation/Slide';

export const styleSheet = createStyleSheet('AppFrame', (theme) => {
  const {palette, typography} = theme;
  return {
    '@raw html': {boxSizing: 'border-box'},
    '@raw *, *:before, *:after': {boxSizing: 'inherit'},
    '@raw body': {
      margin: 0,
      background: palette.background.default,
      fontFamily: typography.fontFamily,
      color: palette.text.primary,
      overflowX: 'hidden',
    },
    root: {
      display: 'flex',
      alignItems: 'stretch',
      minHeight: '100vh',
      width: '100vw',
    },
  };
});

export default class AppFrame extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  state = {
    drawerOpen: false,
  };

  handleDrawerOpen = () => this.setState({drawerOpen: true});
  handleDrawerClose = () => this.setState({drawerOpen: false});
  handleDrawerToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar style={{justifyContent: 'flex-end'}}>
            <IconButton onClick={this.handleDrawerToggle}>menu</IconButton>
            <ToolbarTitle>Style Experiment</ToolbarTitle>
          </Toolbar>
        </AppBar>
        <AppDrawer
          onRequestClose={this.handleDrawerClose}
          open={this.state.drawerOpen}
        />
        <Slide><DemoContent /></Slide>

      </div>
    );
  }
}

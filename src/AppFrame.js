import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import AppBar from './components/AppBar';
import Toolbar, {ToolbarTitle} from './components/Toolbar';
import IconButton from './components/IconButton';
import AppDrawer from './AppDrawer';
import AppContent from './AppContent';

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
      lineHeight: '1.2',
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
    children: PropTypes.node,
    routes: PropTypes.array,
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

  getTitle() {
    const {routes} = this.props;
    for (let i = routes.length - 1; i >= 0; i--) {
      if (routes[i].title) {
        return routes[i].title;
      }
    }
    return null;
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton onClick={this.handleDrawerToggle}>menu</IconButton>
            <ToolbarTitle>{this.getTitle()}</ToolbarTitle>
          </Toolbar>
        </AppBar>
        <AppDrawer
          onRequestClose={this.handleDrawerClose}
          open={this.state.drawerOpen}
        />
        <AppContent>{this.props.children}</AppContent>
      </div>
    );
  }
}

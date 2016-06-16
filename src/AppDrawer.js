import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import {List, ListItem} from './components/List';
import {Link} from 'react-router';
import Drawer from './components/Drawer';
import Divider from './components/Divider';

export const styleSheet = createStyleSheet('AppDrawer', (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'stretch',
      minHeight: '100vh',
      width: '100vw',
    },
    nav: {
      flex: '1 0 auto',
      navItem: {
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
      },
    },
    footer: {
      flex: '0 0 auto',
    },
    copyright: {
      fontSize: 12,
      background: theme.palette.grey[100],
      color: theme.palette.grey[600],
      padding: '10px 16px',
    },
  };
});

export default class AppDrawer extends Component {
  static propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Drawer {...this.props}>
        <div className={classes.nav}>
          <List>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <span className="material-icons">inbox</span> Inbox
            </ListItem>
            <ListItem className={classes.navItem} el={Link} to="/starred">
              <span className="material-icons">star</span> Starred
            </ListItem>
          </List>
        </div>
        <footer className={classes.footer}>
          <Divider />
          <List className={classes.nav}>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <span className="material-icons">eject</span> Sign Out
            </ListItem>
          </List>
          <div className={classes.copyright}>&copy;2016 HAL9000</div>
        </footer>
      </Drawer>
    );
  }
}

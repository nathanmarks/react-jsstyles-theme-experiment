import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import {List, ListItem, ListItemIcon} from './components/List';
import {Link} from 'react-router';
import Drawer from './components/Drawer';
import Divider from './components/Divider';

export const styleSheet = createStyleSheet('AppDrawer', (theme) => {
  return {
    paper: {
      width: '275px',
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
      <Drawer paperClassName={classes.paper} {...this.props}>
        <div className={classes.nav}>
          <List>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <ListItemIcon className="material-icons">inbox</ListItemIcon> Inbox
            </ListItem>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <ListItemIcon className="material-icons">star</ListItemIcon> Starred
            </ListItem>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <ListItemIcon className="material-icons">send</ListItemIcon> Sent mail
            </ListItem>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <ListItemIcon className="material-icons">drafts</ListItemIcon> Drafts
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <ListItemIcon className="material-icons">email</ListItemIcon> All mail
            </ListItem>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <ListItemIcon className="material-icons">delete</ListItemIcon> Trash
            </ListItem>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <ListItemIcon className="material-icons">report</ListItemIcon> Spam
            </ListItem>
          </List>
        </div>
        <footer className={classes.footer}>
          <Divider />
          <List className={classes.nav}>
            <ListItem className={classes.navItem} el={Link} to="/inbox">
              <ListItemIcon className="material-icons">eject</ListItemIcon> Sign Out
            </ListItem>
          </List>
          <div className={classes.copyright}>&copy;2016 HAL9000</div>
        </footer>
      </Drawer>
    );
  }
}

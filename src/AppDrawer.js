import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import Drawer from './components/Drawer';

export const styleSheet = createStyleSheet('AppDrawer', () => {
  return {
    root: {
      display: 'flex',
      alignItems: 'stretch',
      minHeight: '100vh',
      width: '100vw',
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
      <Drawer {...this.props} />
    );
  }
}

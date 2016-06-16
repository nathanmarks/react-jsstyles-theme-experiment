import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';

export const styleSheet = createStyleSheet('AppContent', (theme) => {
  return {
    content: theme.mixins.gutters({
      paddingTop: 80,
      flex: '1 1 100%',
      maxWidth: 900,
      margin: '0 auto',
    }),
  };
});

export default class AppContent extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    return (
      <div className={classes.content} {...this.props} />
    );
  }
}

import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';

export const styleSheet = createStyleSheet('AppContent', (theme) => {
  return {
    content: theme.mixins.gutters({
      paddingTop: 80,
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
    console.log(classes);
    return (
      <div className={classes.content} {...this.props} />
    );
  }
}

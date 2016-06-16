import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('ListItem', (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: '8px 16px',
      textDecoration: 'none',
      transition: theme.transitions.create(),
    },
  };
});

export default class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    el: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    el: 'div',
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {className, el, ...other} = this.props;
    const classes = this.context.styleManager.render(styleSheet);
    const classNames = ClassNames(classes.root, className);
    return React.createElement(el, {className: classNames, ...other});
  }
}

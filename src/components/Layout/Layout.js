import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('Layout', () => {
  return {
    root: {
      maxWidth: 600,
    },
  };
});

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {className, ...other} = this.props;
    const classes = this.context.styleManager.render(styleSheet);
    const classNames = ClassNames(classes.root, className);
    return (
      <div className={classNames} {...other}>{this.props.children}</div>
    );
  }
}

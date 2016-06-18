import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('Layout', () => {
  return {
    root: {
      display: 'flex',
    },
    grow: {
      flexBasis: '100%',
      flexGrow: 1,
    },
  };
});

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    grow: PropTypes.bool,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {
      children,
      className,
      grow,
      ...other,
    } = this.props;

    const classes = this.context.styleManager.render(styleSheet);
    const classNames = ClassNames(classes.root, {
      [classes.grow]: grow,
    }, className);

    return (
      <div className={classNames} {...other}>{children}</div>
    );
  }
}

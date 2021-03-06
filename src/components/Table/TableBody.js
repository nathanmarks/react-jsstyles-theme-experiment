import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('TableBody', (theme) => {
  return {
    root: {
      fontSize: 13,
      color: theme.palette.text.primary,
    },
  };
});

export default class TableBody extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static contextTypes = {
    table: PropTypes.object,
    styleManager: PropTypes.object.isRequired,
  };

  static childContextTypes = {table: PropTypes.object};

  getChildContext() {
    return {table: {body: true}};
  }

  render() {
    const {className, children, ...other} = this.props;
    const classes = this.context.styleManager.render(styleSheet);
    const classNames = ClassNames(classes.root, className);

    return (
      <tbody className={classNames} {...other}>
        {children}
      </tbody>
    );
  }
}

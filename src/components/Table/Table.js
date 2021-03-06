import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('Table', () => {
  return {
    root: {
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'fixed',
      overflow: 'hidden',
    },
  };
});

export default class Table extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  static childContextTypes = {table: PropTypes.object};

  getChildContext() {
    return {table: {}};
  }

  render() {
    const {className, children, ...other} = this.props;
    const classes = this.context.styleManager.render(styleSheet);
    const classNames = ClassNames(classes.root, className);

    return (
      <table className={classNames} {...other}>
        {children}
      </table>
    );
  }
}

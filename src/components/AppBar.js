import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('AppBar', (theme) => {
  const {palette, shadows} = theme;

  return {
    base: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: 64,
      position: 'fixed',
      top: 0,
      left: 0,
      padding: '0px 24px',
      boxShadow: shadows[4],
      backgroundColor: palette.primary[500],
      color: palette.getContrastText(palette.primary[500]),
      fontSize: 20, // for demo purposes
      fontWeight: 500, // for demo purposes
    },
  };
});

export default class AppBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {
      children,
      className,
      ...other,
    } = this.props;

    const classes = this.context.styleManager.render(styleSheet);

    const classNames = ClassNames({
      [classes.base]: true,
    }, className);

    return (
      <div className={classNames} {...other}>
        {children}
      </div>
    );
  }
}

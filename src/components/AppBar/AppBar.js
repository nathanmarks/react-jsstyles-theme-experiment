import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('AppBar', (theme) => {
  const {palette, shadows} = theme;

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      boxShadow: shadows[4],
      backgroundColor: palette.primary[500],
      color: palette.getContrastText(palette.primary[500]),
      '& primary': {
        backgroundColor: palette.primary[500],
        color: palette.getContrastText(palette.primary[500]),
      },
      '& accent': {
        backgroundColor: palette.accent.A200,
        color: palette.getContrastText(palette.accent.A200),
      },
    },
  };
});

export default class AppBar extends Component {
  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    primary: PropTypes.bool,
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

    const classNames = ClassNames(classes.root, className);

    return (
      <div className={classNames} {...other}>
        {children}
      </div>
    );
  }
}

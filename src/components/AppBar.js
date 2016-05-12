import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('app-bar', (theme) => {
  const { palette, shadows } = theme;

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
      color: palette.contrastText[palette.primary.contrastDefaultColor],
    }
  };
});

export default class AppBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.context.styleManager.attach(styleSheet);
  }

  componentWillUnmount() {
    this.context.styleManager.detach(styleSheet);
  }

  render() {
    const {
      children,
      className,
      ...other
    } = this.props;

    const classes = this.context.styleManager.getClasses(styleSheet);

    const classNames = ClassNames({
      [classes.base]: true
    }, className);

    return (
      <div className={classNames} {...other}>
        {children}
      </div>
    );
  }
}

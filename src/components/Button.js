import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('button', (theme) => {
  const { palette, transitions, typography } = theme;

  return {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 88,
      height: 36,
      padding: '0px 16px',
      outline: 'none',
      border: 10,
      borderRadius: 2,
      fontWeight: 500,
      fontSize: 14,
      fontFamily: typography.fontFamily,
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: transitions.easeOut()
    },
    raised: {
      color: '#fff',
      boxShadow: palette.zDepthShadows[0],
      '&:active': {
        boxShadow: palette.zDepthShadows[2]
      }
    },
    raisedPrimary: {
      backgroundColor: palette.primary[500],
      '&:hover, &:active': {
        backgroundColor: palette.primary[700]
      }
    },
    raisedAccent: {
      backgroundColor: palette.accent.A200,
      '&:hover, &:active': {
        backgroundColor: palette.accent.A400
      }
    }
  };
});

export default class Button extends Component {
  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    primary: PropTypes.bool,
    type: PropTypes.oneOf(['flat', 'raised'])
  };

  static defaultProps = {
    type: 'raised'
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
    const { accent, children, className, primary, ...other } = this.props;
    const { classes } = styleSheet;

    const classNames = ClassNames({
      [classes.base]: true,
      [classes.raised]: true,
      [classes.raisedPrimary]: primary,
      [classes.raisedAccent]: accent
    }, className);

    return (
      <button className={classNames} {...other}>
        {children}
      </button>
    );
  }
}

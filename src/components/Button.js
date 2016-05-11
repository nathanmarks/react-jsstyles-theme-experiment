import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('button', (theme) => {
  const { palette, transitions, typography } = theme;

  const base = {
    ...typography.button,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 88,
    height: 36,
    padding: '0px 16px',
    outline: 'none',
    border: 10,
    borderRadius: 2,
    cursor: 'pointer',
    transition: transitions.easeOut()
  };

  const raised = {
    extend: base,
    boxShadow: palette.zDepthShadows[0],
    '&:focus': {
      boxShadow: palette.zDepthShadows[1]
    },
    '&:active': {
      boxShadow: palette.zDepthShadows[2]
    }
  };

  return {
    raisedDefault: {
      extend: raised,
      color: palette.contrastText[palette.grey.contrastDefaultColor],
      backgroundColor: palette.grey[300],
      '&:hover, &:active': {
        backgroundColor: palette.grey.A100
      }
    },
    raisedPrimary: {
      extend: raised,
      color: palette.contrastText[palette.primary.contrastDefaultColor],
      backgroundColor: palette.primary[500],
      '&:hover, &:active': {
        backgroundColor: palette.primary[700]
      }
    },
    raisedAccent: {
      extend: raised,
      color: palette.contrastText[palette.accent.contrastDefaultColor],
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
    this.styleSheet = this.context.styleManager.attach(styleSheet);
  }

  componentWillUnmount() {
    this.context.styleManager.detach(styleSheet);
  }

  render() {
    const {
      accent,
      children,
      className,
      primary,
      type, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const { classes } = this.styleSheet;
    const raised = type === 'raised';

    const classNames = ClassNames({
      [classes.raisedDefault]: raised && !primary && !accent,
      [classes.raisedPrimary]: raised && primary,
      [classes.raisedAccent]: raised && accent
    }, className);

    return (
      <button className={classNames} {...other}>
        {children}
      </button>
    );
  }
}

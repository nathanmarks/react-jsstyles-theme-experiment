import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';
import {Ripple, createRippleHandler} from '../Animation';

function createButtonColorRule(main, contrast, hover) {
  return {
    color: main,
    '& raised': {
      color: contrast,
      backgroundColor: main,
      '&:hover': {
        backgroundColor: hover,
      },
    },
  };
}

export const styleSheet = createStyleSheet('Button', (theme) => {
  const {palette, shadows, transitions, typography} = theme;

  return {
    base: {
      ...typography.button,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 88,
      height: 36,
      padding: '0px 16px',
      outline: 'none',
      border: 10,
      borderRadius: 2,
      cursor: 'pointer',
      overflow: 'hidden',
      color: palette.text.primary,
      backgroundColor: 'transparent',
      transition: transitions.create(),
      '&:hover': {
        backgroundColor: palette.text.divider,
      },
    },
    raised: {
      color: palette.getContrastText(palette.grey[300]),
      backgroundColor: palette.grey[300],
      boxShadow: shadows[2],
      '&:hover': {
        backgroundColor: palette.grey.A100,
      },
      '&:active': {
        boxShadow: shadows[8],
      },
    },
    primary: createButtonColorRule(
      palette.primary[500],
      palette.getContrastText(palette.primary[500]),
      palette.primary[700]
    ),
    accent: createButtonColorRule(
      palette.accent.A200,
      palette.getContrastText(palette.accent.A200),
      palette.accent.A400
    ),
  };
});

export default class Button extends Component {
  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onBlur: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onTouchStart: PropTypes.func,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    ripple: PropTypes.bool,
  };

  static defaultProps = {
    ripple: true,
    raised: false,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  ripple = undefined;

  handleMouseDown = createRippleHandler(this, 'MouseDown', 'start');
  handleMouseUp = createRippleHandler(this, 'MouseUp', 'stop');
  handleTouchStart = createRippleHandler(this, 'TouchStart', 'start');
  handleTouchEnd = createRippleHandler(this, 'TouchEnd', 'stop');
  handleBlur = createRippleHandler(this, 'Blur', 'stop');

  render() {
    const {
      accent,
      children,
      className,
      onBlur, // eslint-disable-line no-unused-vars
      onMouseDown, // eslint-disable-line no-unused-vars
      onMouseLeave, // eslint-disable-line no-unused-vars
      onMouseUp, // eslint-disable-line no-unused-vars
      onTouchEnd, // eslint-disable-line no-unused-vars
      onTouchStart, // eslint-disable-line no-unused-vars
      primary,
      raised,
      ripple,
      ...other,
    } = this.props;

    const classes = this.context.styleManager.render(styleSheet);

    const classNames = ClassNames({
      [classes.base]: true,
      [classes.raised]: raised,
      [classes.primary]: primary,
      [classes.accent]: accent,
    }, className);

    return (
      <button
        onBlur={this.handleBlur}
        onMouseDown={this.handleMouseDown}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseUp}
        onTouchEnd={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}
        className={classNames}
        {...other}
      >
        {children}
        {ripple && <Ripple ref={(c) => this.ripple = c} />}
      </button>
    );
  }
}

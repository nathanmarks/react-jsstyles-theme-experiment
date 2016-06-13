import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';
import Ripple, {createRippleHandler} from './Ripple';

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
      overflow: 'hidden',
      transition: transitions.easeOut(),
    },
    raised: {
      boxShadow: shadows[2],
      '&:active': {
        boxShadow: shadows[8],
      },
    },
    default: createButtonColorRule(
      palette.grey[300],
      palette.getContrastText(palette.grey[300]),
      palette.grey.A100
    ),
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
    ripple: PropTypes.bool,
    type: PropTypes.oneOf(['flat', 'raised']),
  };

  static defaultProps = {
    ripple: true,
    type: 'raised',
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  ripple = undefined;

  handleMouseDown = createRippleHandler('MouseDown', 'start').bind(this);
  handleMouseUp = createRippleHandler('MouseUp', 'stop').bind(this);
  handleTouchStart = createRippleHandler('TouchStart', 'start').bind(this);
  handleTouchEnd = createRippleHandler('TouchEnd', 'stop').bind(this);
  handleBlur = createRippleHandler('Blur', 'stop').bind(this);

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
      ripple,
      type, // eslint-disable-line no-unused-vars
      ...other,
    } = this.props;

    const classes = this.context.styleManager.render(styleSheet);
    const raised = type === 'raised';

    const classNames = ClassNames({
      [classes.base]: true,
      [classes.raised]: raised,
      [classes.default]: !primary && !accent,
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

import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('avatar', (theme) => {
  const { palette, } = theme;
  const size = 32;

  return {
    base: {
      color: palette.contrastText,
      backgroundColor: palette.grey[400],
      userSelect: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: `${size}px`,
      fontSize: size / 2,
      borderRadius: '50%',
      height: size,
      width: size,
    },
    hasImage: {
      boxShadow: `inset 0px 0px 0px 1px ${palette.grey[600]}`,
    },
    icon: {
      color: palette.contrastText,
      width: size * 0.6,
      height: size * 0.6,
      fontSize: size * 0.6,
      margin: size * 0.2,
    },
  };
});

export default class Avatar extends Component {
  static muiName = 'Avatar';

  static propTypes = {
    /**
     * Can be used, for instance, to render a letter inside the avatar.
     */
    children: PropTypes.node,
    /**
     * The css class name of the root `div` or `img` element.
     */
    className: PropTypes.string,
    /**
     * This is the SvgIcon or FontIcon to be used inside the avatar.
     */
    icon: PropTypes.element,
    /**
     * If passed in, this component will render an img element. Otherwise, a div will be rendered.
     */
    src: PropTypes.string,
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
      icon,
      iconClassName,
      src,
      ...other
    } = this.props;

    const classes = this.context.styleManager.getClasses(styleSheet);

    const classNames = ClassNames({
      [classes.base]: true,
      [classes.hasImage]: src,
    }, className);

    const iconClassNames = ClassNames({
      [classes.icon]: true,
    }, iconClassName);

    if (src) {
      return (
        <img
          {...other}
          src={src}
          className={classNames}
        />
      );
    } else {
      return (
        <div
          {...other}
          className={classNames}
        >
          {icon && React.cloneElement(icon, {
            color: styles.icon.color,
            className: iconClassNames,
          })}
          {children}
        </div>
      );
    }
  }
}

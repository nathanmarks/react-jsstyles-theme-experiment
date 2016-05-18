import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('avatar', (theme) => {
  const { palette, } = theme;

  return {
    base: {
      color: palette.contrastText,
      backgroundColor: palette.grey[400],
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '50%',
    },
    hasImage: {
      boxShadow: `inset 0px 0px 0px 1px ${palette.grey[600]}`,
    },
    icon: {
      color: palette.contrastText,
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
     * The size of the avatar in pixels.
     */
    size: PropTypes.number,
    /**
     * If passed in, this component will render an img element. Otherwise, a div will be rendered.
     */
    src: PropTypes.string,
  };

  static defaultProps = {
    size: 40,
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
      size,
      style,
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

    const styles = {
      root: {
        fontSize: size / 2,
        height: size,
        width: size,
      },
      icon: {
        width: size * 0.6,
        height: size * 0.6,
      },
    };

    if (src) {
      return (
        <img
          {...other}
          src={src}
          className={classNames}
          style={Object.assign(styles.root, style)}
        />
      );
    } else {
      return (
        <div
          className={classNames}
          style={Object.assign(styles.root, style)}
          {...other}
        >
          {icon && React.cloneElement(icon, {
            color: Object.assign(styles.icon.color, icon.props.color),
            color: Object.assign(styles.icon.color, icon.props.color),
            className: iconClassNames,
            style: Object.assign(styles.icon, icon.props.style),
          })}
          {children}
        </div>
      );
    }
  }
}

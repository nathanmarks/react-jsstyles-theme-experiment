import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('Avatar', (theme) => {
  const {palette} = theme;

  return {
    base: {
      color: 'white',
      fill: 'white',
      lineHeight: 1,
      backgroundColor: palette.grey[400],
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '50%',
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
     * The size of the avatar in pixels.
     */
    size: PropTypes.number,
    /**
     * If passed in, this component will render an img element. Otherwise, a div will be rendered.
     */
    src: PropTypes.string,
    /**
     * Override the inline style of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    size: 40,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {
      children,
      className,
      size,
      src,
      style,
      ...other,
    } = this.props;

    const classes = this.context.styleManager.render(styleSheet);

    const classNames = ClassNames({
      [classes.base]: true,
    }, className);

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

    let cloneChildren;

    if (React.isValidElement(children)) {
      cloneChildren = React.cloneElement(children, {
        style: Object.assign(styles.icon, children.props.style),
      });
    } else {
      cloneChildren = children;
    }

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
          {cloneChildren}
        </div>
      );
    }
  }
}

import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('svgicon', (theme) => {
  const { palette, transitions } = theme;

  return {
    base: {
      display: 'inline-block',
      fill: palette.text,
      height: 24,
      width: 24,
      userSelect: 'none',
      transition: transitions.easeOut(),
      '&:hover': {
        backgroundColor: palette.text
      },
    },
  };
});

export default class SvgIcon extends Component {
  static muiName = 'SvgIcon';

  static propTypes = {
    /**
     * Elements passed into the SVG Icon.
     */
    children: PropTypes.node,
    /**
     * This is the fill color of the svg icon.
     * If not specified, this component will default
     * to muiTheme.palette.textColor.
     */
    color: PropTypes.string,
    /**
     * This is the icon color when the mouse hovers over the icon.
     */
    hoverColor: PropTypes.string,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Allows you to redifine what the coordinates
     * without units mean inside an svg element. For example,
     * if the SVG element is 500 (width) by 200 (height), and you
     * pass viewBox="0 0 50 20", this means that the coordinates inside
     * the svg will go from the top left corner (0,0) to bottom right (50,20)
     * and each unit will be worth 10px.
     */
    viewBox: PropTypes.string,
  };

  static defaultProps = {
    viewBox: '0 0 24 24',
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
      color,
      hoverColor,
      viewBox,
      ...other,
    } = this.props;

    const classes = this.context.styleManager.getClasses(styleSheet);

    const classNames = ClassNames({
      [classes.base]: true,
    }, className);

    return (
      <svg
        className={classNames}
        {...other}
        viewBox={viewBox}
      >
        {children}
      </svg>
    );
  }
}

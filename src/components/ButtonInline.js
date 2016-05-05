import React, { Component, PropTypes } from 'react';

const getStyles = (props, context, state) => {
  const { palette, transitions } = context.theme;

  const button = {
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
    fontFamily: context.theme.fontFamily,
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: transitions.easeOut()
  };

  if (props.type === 'raised') {
    button.color = '#fff';
    button.boxShadow = palette.zDepthShadows[0];
    if (state.pressed) {
      button.boxShadow = palette.zDepthShadows[2];
    }

    if (state.pressed || state.hovered) {
      if (props.primary) {
        button.backgroundColor = palette.primary[700];
      } else if (props.accent) {
        button.backgroundColor = palette.accent.A400;
      }
    } else {
      if (props.primary) {
        button.backgroundColor = palette.primary[500];
      } else if (props.accent) {
        button.backgroundColor = palette.accent.A200;
      }
    }
  }

  return {
    root: button
  };
};

export default class Button extends Component {
  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    primary: PropTypes.bool,
    style: PropTypes.object,
    type: PropTypes.oneOf(['flat', 'raised'])
  };

  static defaultProps = {
    type: 'raised'
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired,
  };

  state = {
    hovered: false,
    pressed: false
  };

  handleMouseEnter = () => {
    // Cancel hover styles for touch devices
    if (!this.state.touch) {
      this.setState({ hovered: true });
    }
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleMouseDown = (event) => {
    // only listen to left clicks
    if (event.button === 0) {
      this.setState({ pressed: true });
    }
    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }
  };

  handleMouseUp = (event) => {
    this.setState({ pressed: false });
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  render() {
    const {
      accent, // eslint-disable-line no-unused-vars
      children,
      primary, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const styles = Object.assign(
      getStyles(this.props, this.context, this.state).root,
      style
    );

    return (
      <button
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        style={styles}
        {...other}
      >
        {children}
      </button>
    );
  }
}

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export function createRippleHandler(eventName, action) {
  return function handleEvent(event) {
    if (this.ripple) {
      this.ripple[action](event);
    }
    if (this.props && typeof this.props[`handle${eventName}`] === 'function') {
      this.props[`on${eventName}`](event);
    }
  };
}

export const styleSheet = createStyleSheet('Ripple', (theme) => ({
  container: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    overflow: 'hidden',
    transition: theme.transitions.easeOut('600ms', 'opacity'),
  },
  ripple: {
    width: 50,
    height: 50,
    left: 0,
    top: 0,
    opacity: 0,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    borderRadius: '50%',
    background: 'currentColor',
    pointerEvents: 'none',
  },
  animating: {
    transition: theme.transitions.easeOut(
      ['450ms', '450ms', '450ms', '600ms'],
      ['transform', 'width', 'height', 'opacity'],
    ),
  },
  visible: {
    opacity: 0.25,
  },
}));

export default class Ripple extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  state = {
    rippleStart: false,
    rippleVisible: false,
  };

  ignoringMouseDown = false;
  rippleSize = 0;
  rippleX = 0;
  rippleY = 0;

  start = (event) => {
    // Get the size of the ripple
    const elem = ReactDOM.findDOMNode(this);
    const rect = elem.getBoundingClientRect();
    let ignoringMouseDown = false;

    if (event.type === 'mousedown' && this.ignoringMouseDown) {
      this.ignoringMouseDown = ignoringMouseDown;
    } else {
      if (event.type === 'touchstart') {
        ignoringMouseDown = true;
      }

      let rippleX;
      let rippleY;

      // Check if we are handling a keyboard click.
      if (event.clientX === 0 && event.clientY === 0) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      this.ignoringMouseDown = ignoringMouseDown;
      this.rippleX = rippleX;
      this.rippleY = rippleY;
      this.rippleVisible = true;
      this.rippleStart = true;

      const sizeX = Math.max(Math.abs(elem.clientWidth - rippleX), rippleX) * 2;
      const sizeY = Math.max(Math.abs(elem.clientHeight - rippleY), rippleY) * 2;

      this.rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));

      this.setState({
        rippleVisible: true,
        rippleStart: true,
      }, () => {
        window.requestAnimationFrame(() => {
          this.setState({rippleStart: false});
        });
      });
    }
  };

  stop = () => {
    this.setState({
      rippleVisible: false,
    });
  };

  getRippleStyles() {
    const {rippleStart} = this.state;
    const {rippleSize, rippleX, rippleY} = this;

    let scale;
    const offset = `translate(${rippleX}px, ${rippleY}px)`;

    if (rippleStart) {
      scale = 'scale(0.0001, 0.0001)';
      // size = '1px';
    } else {
      scale = '';
      // size = `${rippleSize}px`;

      // if (recentering) {
      //   offset = 'translate(' + this.boundWidth / 2 + 'px, ' +
      //     this.boundHeight / 2 + 'px)';
      // }
    }

    const transformString = `translate(-50%, -50%) ${offset} ${scale}`;

    const rippleStyles = {
      width: `${rippleSize}px`,
      height: `${rippleSize}px`,
      transform: transformString,
    };

    return rippleStyles;
  }

  render() {
    const {className} = this.props;
    const {rippleStart, rippleVisible} = this.state;
    const classes = this.context.styleManager.render(styleSheet);

    const rippleClassName = ClassNames({
      [classes.ripple]: true,
      [classes.visible]: rippleVisible,
      [classes.animating]: !rippleStart,
    });

    return (
      <span className={ClassNames(classes.container, className)}>
        <span className={rippleClassName} style={this.getRippleStyles()}></span>
      </span>
    );
  }
}
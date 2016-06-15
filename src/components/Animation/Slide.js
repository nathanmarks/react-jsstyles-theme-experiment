import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly';
import ClassNames from 'classnames';
import Transition from 'react-overlays/lib/Transition';

// const triggerBrowserReflow = (node) => node.offsetHeight;

export const styleSheet = createStyleSheet('Slide', (theme) => {
  return {
    slideIn: {
      transition: theme.transitions.create(),
    },
    right: {
      transform: 'translate3d(-100%, 0, 0)',
    },
    in: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
});

export default class Slide extends Component {
  static propTypes = {
    /**
     * Used to control the transition. Set to true to reveal the component.
     */
    active: PropTypes.bool,
    /**
     * Can be used, for instance, to render a letter inside the avatar.
     */
    children: PropTypes.node,
    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,
    direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  };

  static defaultProps = {
    direction: 'right',
    active: false,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {active, children, className, direction, ...other} = this.props;
    const classes = this.context.styleManager.render(styleSheet);
    const classNames = ClassNames(classes.slideIn, classes[direction], className);
    console.log(classes);
    return (
      <Transition
        in={active}
        className={classNames}
        enteredClassName={classes.in}
        enteringClassName={classes.in}
        timeout={500}
        transitionAppear={true}
        {...other}
      >
        {children}
      </Transition>
    );
  }
}

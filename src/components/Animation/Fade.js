import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly';
import ClassNames from 'classnames';
import Transition from 'react-overlays/lib/Transition';

// const triggerBrowserReflow = (node) => node.offsetHeight;

export const styleSheet = createStyleSheet('Fade', (theme) => {
  return {
    fade: {
      opacity: 0,
      transition: theme.transitions.create(),
    },
    in: {
      opacity: 1,
    },
  };
});

export default class Fade extends Component {
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
  };

  static defaultProps = {
    active: false,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {active, children, className, ...other} = this.props;
    const classes = this.context.styleManager.render(styleSheet);
    const classNames = ClassNames(classes.fade, className);

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

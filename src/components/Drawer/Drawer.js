import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';
import Paper from '../Paper';
import Modal from '../internal/Modal';
import Slide from '../Animation/Slide';

export const styleSheet = createStyleSheet('Drawer', () => {
  return {
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      height: '100vh',
      width: '280px',
      flex: '1 0 280px',
      '&:focus': {
        outline: 'none',
      },
    },
  };
});

class Drawer extends Component {
  static propTypes = {
    /**
     * The contents of the `Drawer`
     */
    children: PropTypes.node,
    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,
    container: PropTypes.func,
    open: PropTypes.bool,
    /**
     * The CSS class name of the paper element.
     */
    paperClassName: PropTypes.string,
    transition: PropTypes.node,
    zDepth: PropTypes.number,
  };

  static defaultProps = {
    container: Modal,
    open: false,
    transition: <Slide />,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {
      children,
      className,
      container,
      open,
      paperClassName,
      transition,
      zDepth,
      ...other,
    } = this.props;

    const classes = this.context.styleManager.render(styleSheet);

    const drawer = (
      <Paper
        zDepth={zDepth}
        rounded={false}
        className={ClassNames(classes.paper, {
          [classes.open]: open,
        }, paperClassName)}
      >
        {children}
      </Paper>
    );

    const containerProps = {
      className,
      open,
      ...other,
    };

    // return React.cloneElement(transition, {active: open}, drawer);

    return React.createElement(
      container,
      containerProps,
      React.cloneElement(transition, {active: open}, drawer),
    );
  }
}

export default Drawer;
import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';
import Paper from '../Paper';
import Modal from '../internal/Modal';

export const styleSheet = createStyleSheet('Drawer', (theme) => {
  const {transitions} = theme;

  return {
    paper: {
      position: 'fixed',
      height: '100vh',
      width: '280px',
      flex: '1 0 280px',
      transform: 'translate3d(-280px, 0, 0)',
      transition: transitions.create('transform'),
      '&:focus': {
        outline: 'none',
      },
      '& open': {
        transform: 'translate3d(0, 0, 0)',
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
    zDepth: PropTypes.number,
  };

  static defaultProps = {
    container: Modal,
    open: false,
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

    return React.createElement(
      container,
      containerProps,
      drawer
    );
  }
}

export default Drawer;

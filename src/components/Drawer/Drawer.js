import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';
import Paper from 'src/components/Paper';

export const styleSheet = createStyleSheet('Drawer', (theme) => {
  const {transitions} = theme;

  return {
    root: {
      height: '100vh',
      width: '280px',
      flex: '1 0 280px',
      transform: 'translate3d(0, 0, 0)',
      transition: transitions.create('transform'),
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
    /**
     * The CSS class name of the root element.
     */
    paperClassName: PropTypes.string,
    zDepth: PropTypes.number,
  };

  static defaultProps = {
    permanent: false,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {
      children,
      className,
      paperClassName,
      zDepth,
      ...other,
    } = this.props;

    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div
        className={ClassNames(classes.root, className)}
        {...other}
      >
        <Paper
          zDepth={zDepth}
          rounded={false}
          className={paperClassName}
        >
          {children}
        </Paper>
      </div>
    );
  }
}

export default Drawer;

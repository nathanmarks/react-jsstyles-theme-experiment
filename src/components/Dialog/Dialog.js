import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import Modal from '../internal/Modal';
import Paper from '../Paper';
import Slide from '../Animation/Slide';

export const styleSheet = createStyleSheet('Dialog', () => {
  return {
    dialog: {
      position: 'relative',
      width: '75%',
      maxWidth: 960,
      margin: '0 auto',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'fixed',
      '&:focus': {
        outline: 'none',
      },
    },
  };
});

export default class Dialog extends Component {

  static propTypes = {
    children: PropTypes.any,
    onRequestClose: PropTypes.func,
    open: PropTypes.bool,
  };

  static defaultProps = {
    open: false,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {
      children,
      onRequestClose,
      open,
    } = this.props;

    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Modal
        onRequestClose={onRequestClose}
        open={open}
      >
        <Slide
          active={open}
          fade={true}
          duration={450}
          direction="down"
        >
          <div className={classes.container}>
            <Paper zDepth={24} className={classes.dialog}>
              {children}
            </Paper>
          </div>
        </Slide>
      </Modal>
    );
  }
}

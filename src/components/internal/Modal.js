import React, {Component, PropTypes} from 'react';
import ROModal from 'react-overlays/lib/Modal';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import {lightBlack} from '../../styles/colors';

export const styleSheet = createStyleSheet('Modal', (theme) => {
  const modal = {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: theme.zIndex.dialog,
    top: 0,
    left: 0,
  };

  const overlay = {
    backgroundColor: lightBlack,
    ...modal,
    zIndex: -1,
  };

  return {modal, overlay};
});

export default class Modal extends Component {

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
      <ROModal
        className={classes.modal}
        backdropClassName={classes.overlay}
        onHide={onRequestClose}
        show={open}
      >
        {children}
      </ROModal>
    );
  }
}

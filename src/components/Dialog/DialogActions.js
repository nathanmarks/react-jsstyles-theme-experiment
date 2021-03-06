import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('DialogActions', () => {
  return {
    actions: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: '8px 4px',
    },
    action: {
      margin: '0 4px',
    },
    button: {
      minWidth: '64px !important', // Eww, shoulda used a descendant :D
    },
  };
});

export default class DialogActions extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  renderButton = (button) => (
    <div className={this.classes.action}>
      {React.cloneElement(
        button,
        {className: ClassNames(this.classes.button, button.className)}
      )}
    </div>
  );

  render() {
    const {
      children,
      className,
      ...other,
    } = this.props;

    this.classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={ClassNames(this.classes.actions, className)} {...other}>
        {React.Children.map(children, this.renderButton)}
      </div>
    );
  }
}

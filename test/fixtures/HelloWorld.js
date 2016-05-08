import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from 'src/styles/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('hello-world', (theme) => {
  const { transitions, typography } = theme;
  return {
    base: {
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
      fontFamily: typography.fontFamily,
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: transitions.easeOut()
    }
  };
});

export default class HelloWorld extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.styleSheet = this.context.styleManager.attach(styleSheet);
  }

  componentWillUnmount() {
    this.context.styleManager.detach(styleSheet);
  }

  render() {
    const {
      children,
      className,
      ...other
    } = this.props;

    const { classes } = this.styleSheet;
    const classNames = ClassNames(classes.base, className);

    return (
      <div className={classNames} {...other}>
        {children}
      </div>
    );
  }
}

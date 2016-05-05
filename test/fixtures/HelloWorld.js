import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from 'react-jsstyles/styleSheet';

// console.log(styles.rules);

export default class HelloWorld extends Component {
  static propTypes = {
    children: PropTypes.any,
    testProp: PropTypes.number,
  };

  componentWillMount() {
    createStyleSheet('hello-world', {
      text: {
        fontSize: this.props.testProp || 12,
        background: 'red',
        '&:hover': {
          background: 'blue'
        }
      }
    }).attach();
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <p>Hello World.</p>
        {children}
      </div>
    );
  }
}

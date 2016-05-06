import React, { Component, PropTypes } from 'react';
import Button from './Button';

export default class Demo extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div>
        <h4>JS Styles</h4>
        <Button primary={true}>Hello World</Button>
      </div>
    );
  }
}

export default Demo;

import React, { Component, PropTypes } from 'react';
import themeProvider from './styles/themeProvider';
import Button from './components/Button';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div>
        <div>
          <h4>JS Styles</h4>
          <Button primary={true}>Hello World</Button>
        </div>
      </div>
    );
  }
}

export default themeProvider()(App);

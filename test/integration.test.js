/* eslint-env mocha */
import React from 'react';
import ReactDOM from 'react-dom/server';
import { assert } from 'chai';
import { createPalette, deepOrange, lightBlue } from 'src/styles/colors';
import { createMuiTheme } from 'src/styles/theme';
import ThemeProvider from 'src/styles/ThemeProvider';
import HelloWorld from './fixtures/HelloWorld';

describe('concurrency', () => {
  const customTheme = createMuiTheme(createPalette({
    primary: deepOrange,
    accent: lightBlue
  }));

  it('should render the unique theme classes', () => {
    const testA = ReactDOM.renderToString(
      <ThemeProvider><HelloWorld /></ThemeProvider>
    );
    const testB = ReactDOM.renderToString(
      <ThemeProvider theme={customTheme}><HelloWorld /></ThemeProvider>
    );
    assert.strictEqual(
      testA,
      '<div class="hello-world__base--1n7scjm" data-reactroot="" data-reactid="1" data-react-checksum="-1827005520"></div>',
      'should have the correct markup'
    );
    assert.strictEqual(
      testB,
      '<div class="hello-world__base--1pua1s5" data-reactroot="" data-reactid="1" data-react-checksum="-1966662787"></div>',
      'should have the correct markup'
    );
  });
});

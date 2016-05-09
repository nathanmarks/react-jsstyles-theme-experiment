/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import { createMuiTheme } from '../styles/theme';
import { createStyleManager } from '../styles/styleManager';
import Button, { styleSheet } from './Button';

describe('<Button />', () => {
  const theme = createMuiTheme();
  const styleManager = createStyleManager({ theme });
  const shallowWithContext = (node, context = {}) =>
    shallow(node, { context: { theme, styleManager, ...context } });

  it('should render a primary color raised button', () => {
    const wrapper = shallowWithContext(
      <Button type="raised" primary={true}>Hello World</Button>
    );
    assert.ok(
      wrapper.hasClass(styleManager.getClasses(styleSheet).raised),
      'should have the raised class'
    );
    assert.ok(
      wrapper.hasClass(styleManager.getClasses(styleSheet).raisedPrimary),
      'should have the raised primary class'
    );
  });
});

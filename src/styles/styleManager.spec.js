/* eslint-env mocha */
import { assert } from 'chai';
import { createStyleManager } from './styleManager';

describe('styles/styleManager', () => {
  describe('export createStyleManager()', () => {
    it('should create a styleManager object', () => {
      const styleManager = createStyleManager();
      assert.ok(styleManager);
      assert.ok(styleManager.jss, 'should have a Jss instance');
      assert.ok(styleManager.jss.sheets, 'should have the sheet property on the Jss instance');
      assert.strictEqual(
        typeof styleManager.jss.createStyleSheet,
        'function',
        'should have the create stylesheet function on the Jss instance'
      );
    });
  });

  describe('~styleManager', () => {
    // it('should create ')
  });
});

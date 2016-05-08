/* eslint-env mocha */
import { assert } from 'chai';
import { createStyleManager } from './styleManager';
import { createStyleSheet } from './styleSheet';

describe('styles/styleManager', () => {
  describe('exports.createStyleManager()', () => {
    it('should create a styleManager object', () => {
      const styleManager = createStyleManager();
      assert.ok(styleManager);
      assert.ok(styleManager.jss, 'should have a jss key');
      assert.ok(styleManager.jss.sheets, 'should have the sheet property on the jss key');
      assert.strictEqual(
        typeof styleManager.jss.createStyleSheet,
        'function',
        'should have a createStyleSheet function on the jss key'
      );
    });
  });

  describe('styleManager', () => {
    const theme = { id: 'mytheme' };
    const styleSheet = createStyleSheet('woof', () => ({ base: { color: 'red' } }));
    const styleManager = createStyleManager({ theme });

    describe('.attach(styleSheet)', () => {
      it('should return an object with the resolved classnames', () => {
        const localStyleSheet = styleManager.attach(styleSheet);
        assert.strictEqual(
          localStyleSheet.classes.base,
          'woof__base--mytheme',
          'the local styleSheet class object should have the formatted class name'
        );
      });
    });
  });
});

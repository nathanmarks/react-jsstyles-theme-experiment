/* eslint-env mocha */
import { assert } from 'chai';
import { createStyleManager } from './styleManager';
import { createStyleSheet } from './styleSheet';
import find from 'lodash.find';

describe('styles/styleManager', () => {
  describe('exports.createStyleManager()', () => {
    it('should create a styleManager object', () => {
      const styleManager = createStyleManager();
      assert.strictEqual(typeof styleManager, 'object', 'should be an object');
      assert.strictEqual(typeof styleManager.attach, 'function', 'should be a function');
      assert.strictEqual(typeof styleManager.detach, 'function', 'should be a function');
    });
  });

  describe('styleManager', () => {
    const theme = { id: 'mytheme' };
    const sheetMap = [];
    const styleSheet = createStyleSheet('woof', () => ({ base: { color: 'red' } }));
    const styleManager = createStyleManager({ theme, sheetMap });

    describe('.attach(styleSheet)', () => {
      const localStyleSheet = styleManager.attach(styleSheet);
      const mapping = find(sheetMap, { styleSheet });

      it('should return an object with the resolved classnames', () => {
        assert.strictEqual(
          localStyleSheet.classes.base,
          'woof__base--mytheme',
          'the local styleSheet class object should have the formatted class name'
        );
      });

      it('should add the styleSheet to the sheetMap with a count of 1', () => {
        assert.strictEqual(mapping.counter, 1, 'counter should be 1');
      });

      it('should add another count to the sheetMap', () => {
        styleManager.attach(styleSheet);
        assert.strictEqual(mapping.counter, 2, 'counter should be 2');
      });
    });

    describe('.getClasses(styleSheet)', () => {
      it('should retrieve the current classes for the styleSheet', () => {
        const currentClasses = styleManager.getClasses(styleSheet);
        assert.strictEqual(
          currentClasses.base,
          'woof__base--mytheme',
          'the local styleSheet class object should have the formatted class name'
        );
      });
    });

    describe('.detach(styleSheet)', () => {
      it('should remove a count from the sheetMap', () => {
        styleManager.detach(styleSheet);
        const mapping = find(sheetMap, { styleSheet });
        assert.strictEqual(mapping.counter, 1, 'counter should be 1');
      });

      it('should remove the sheet from the sheetMap entirely when counter is 0', () => {
        styleManager.detach(styleSheet);
        assert.notOk(find(sheetMap, { styleSheet }), 'should delete the map entry');
      });
    });
  });
});

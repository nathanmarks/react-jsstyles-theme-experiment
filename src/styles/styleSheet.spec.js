/* eslint-env mocha */
import { assert } from 'chai';
import {
  createStyleSheet
} from './styleSheet';

describe('styles/styleSheet', () => {
  describe('export createStyleSheet()', () => {
    it('should create a styleSheet object', () => {
      const styleSheet = createStyleSheet();
      assert.ok(styleSheet);
    });
  });

  describe.only('concurrency', () => {

  });
});

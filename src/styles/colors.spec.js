/* eslint-env mocha */
import {assert} from 'chai';
import {
  createPalette,
  indigo,
  pink,
  deepOrange,
  green,
  darkText,
  lightText,
} from './colors';

describe('styles/colors.js', () => {
  describe('createPalette()', () => {
    it('should create a material design palette according to spec', () => {
      const palette = createPalette();
      assert.strictEqual(
        palette.primary,
        indigo,
        'should use indigo as the default primary color'
      );
      assert.strictEqual(
        palette.accent,
        pink,
        'should use pink as the default accent color'
      );
      assert.strictEqual(
        palette.text,
        darkText,
        'should use dark text for a light theme by default'
      );
    });

    it('should create a palette with custom colours', () => {
      const palette = createPalette({primary: deepOrange, accent: green});
      assert.strictEqual(
        palette.primary,
        deepOrange,
        'should use deepOrange as the primary color'
      );
      assert.strictEqual(
        palette.accent,
        green,
        'should use green as the accent color'
      );
      assert.strictEqual(
        palette.text,
        darkText,
        'should use dark text'
      );
    });

    it('should create a dark palette', () => {
      const palette = createPalette({dark: true});
      assert.strictEqual(
        palette.primary,
        indigo,
        'should use indigo as the default primary color'
      );
      assert.strictEqual(
        palette.accent,
        pink,
        'should use pink as the default accent color'
      );
      assert.strictEqual(
        palette.text,
        lightText,
        'should use light text for a dark theme by default'
      );
    });
  });
});

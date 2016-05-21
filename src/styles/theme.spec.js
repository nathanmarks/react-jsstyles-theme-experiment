/* eslint-env mocha */
import {assert} from 'chai';
import sinon from 'sinon';
import {createMuiTheme} from './theme';

describe('styles/theme', () => {
  describe('createMuiTheme()', () => {
    it('should be a function', () => {
      assert.strictEqual(
        typeof createMuiTheme,
        'function',
        'should be a function'
      );
    });
  });

  describe('muiTheme', () => {
    const muiTheme = createMuiTheme();

    it('should have a palette', () => {
      assert.ok(muiTheme.palette, 'should have a palette');
    });

    it('should have a hash as an ID', () => {
      assert.ok(muiTheme.id, 'should have an ID');
      assert.strictEqual(muiTheme.id, createMuiTheme().id, 'should have the same ID');
    });
  });

  describe('custom muiTheme', () => {
    const myFunc = sinon.spy();
    const muiTheme = createMuiTheme(
      {foo: 'bar'},
      {myFunc}
    );

    it('should have the custom palette', () => {
      assert.strictEqual(muiTheme.palette.foo, 'bar', 'should have a palette');
    });

    it('should have a unique hash as an ID', () => {
      assert.ok(muiTheme.id, 'should have a unique ID');
      assert.notStrictEqual(
        muiTheme.id,
        createMuiTheme().id,
        'should not have the same ID as default'
      );
    });

    it('should have a custom function', () => {
      assert.strictEqual(muiTheme.myFunc, myFunc, 'should be the custom function');
      muiTheme.myFunc();
      assert.ok(myFunc.calledOnce, 'should call the custom function');
    });
  });
});

const assert = require('assert');
const recursion = require('../src/recursion.js');

describe('recursion', function() {
  describe('Simple tests', function() {
    it('Test 1', function() {
      assert.deepEqual(recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}}), [[100], [90, 120], [70, 99, 110, 130]]);
    });

    it('Test 2', function() {
      assert.deepEqual(recursion({"value":32,"left":{"value":90,"left":{"value":70},"right":{"value":99}}}), [[32], [90], [70, 99]]);
    });

    it('Test 3 [empty tree]', function() {
      assert.deepEqual(recursion({}), []);
    });
  });

});

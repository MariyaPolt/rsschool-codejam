const assert = require('assert');
const sumOfOther = require('../src/sumOfOther.js');

describe('sumOfOther', function() {
  describe('Simple tests', function() {
    it('Test 1', function() {
      assert.deepEqual(sumOfOther([1, 2, 3]), [5, 4, 3]);
    });

    it('Test 2', function() {
      assert.deepEqual(sumOfOther([8, 15, 0]), [15, 8, 23]);
    });

    it('Test 3', function() {
      assert.deepEqual(sumOfOther([1, 100, 5]), [105, 6, 101]);
    });
  });

  describe('With negative integers', function() {
    it('Test 1', function() {
      assert.deepEqual(sumOfOther([1, -2, 3]), [1, 4, -1]);
    });

    it('Test 2', function() {
      assert.deepEqual(sumOfOther([-8, 15, 0]), [15, -8, 7]);
    });

    it('Test 3', function() {
      assert.deepEqual(sumOfOther([1, 100, -5]), [95, -4, 101]);
    });
  });
});

const assert = require('assert');
const make = require('../src/make.js');

function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

describe('make', function() {
  describe('Simple tests', function() {
    it('Test 1', function() {
      assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
    });

    it('Test 2', function() {
      assert.deepEqual(make(5)(-8)(3, 9, 2)(mult), -2160);
    });

    it('Test 3', function() {
      assert.deepEqual(make(5)(mult), 5);
    });
  });
});

const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      //setup
        const expected = 6;
        const testArr = [1,2,3];
      //exercise
        const actual = Calculate.sum(testArr);
      //verify
        assert.equal(actual, expected);
      //teardown
    });
  });
});

var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns the factorial of 5 to ensure this is 120', () => {
      //setup
        const expected = 120;
        const testInput = 5;
      //exercise
        const actual = Calculate.factorial(testInput);

      //verify
      assert.equal(actual, expected);
    });

    it('returns the factorial of 0 to ensure this is 1', () => {
      //setup
        const expected = 1;
        const testInput = 0;
      //exercise
        const actual = Calculate.factorial(0);

      //verify
      assert.equal(actual, expected);
    });

        it('returns the factorial of 3 to ensure this is 6', () => {
      //setup
        const expected = 6;
        const testInput = 3;
      //exercise
        const actual = Calculate.factorial(testInput);

      //verify
      assert.equal(actual, expected);
    });
  });
});
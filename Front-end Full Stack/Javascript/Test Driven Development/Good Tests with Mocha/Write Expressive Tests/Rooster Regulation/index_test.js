const assert = require('assert');

const Rooster = require('../index');
describe('Rooster', () => {
  describe('AccounceDawn', () =>{
    it('returns a rooster call', () => {
      //setup
      const expected = 'cock-a-doodle-doo!';
      //exercise
      const actual = Rooster.announceDawn();
      //verify
      assert.strictEqual(actual, expected);
      //teardown
    });
  });
  describe('timeAtDawn', () =>{
    it('returns time at dawn as a string', () => {
      //setup
      const expected = '13';
      //exercise
      const actual = Rooster.timeAtDawn(13);
      //verify
      assert.strictEqual(actual, expected);
      //teardown
    });
    it('throws an error if passed a number less than 0', () => {
      //setup
      const hour = '-1';
      //exercise
      const actual = Rooster.timeAtDawn(13);
      //verify
      assert.throws(
  () => {
     Rooster.timeAtDawn(hour);
  },
  RangeError
);
      //teardown
    });

        it('throws an error if passed a number greater than 23', () => {
      //setup
      const hour = '24';
      //exercise

      //verify
      assert.throws(
  () => {
     Rooster.timeAtDawn(hour);
  },
  RangeError
);
      //teardown
    });
  });
});
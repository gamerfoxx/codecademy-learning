// import assert here
const assert = require('assert');

describe('+', () => {
  it('returns the sum of its arguments', () => {
    // Write assertion here
    assert.ok(3 + 4 === 7);
  });
});

// NPM test will not throw an error unless what is used in the asser.ok validates to false
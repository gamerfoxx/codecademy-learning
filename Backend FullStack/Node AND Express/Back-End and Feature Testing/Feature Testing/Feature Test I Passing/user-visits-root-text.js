const {assert} = require('chai');

describe('User visits root', () => {

  describe('without existing messages', () => {
    it('starts blank', () => {
      browser.url('/');

      assert.equal(browser.getText('#messages'),'');
    });
  });
});
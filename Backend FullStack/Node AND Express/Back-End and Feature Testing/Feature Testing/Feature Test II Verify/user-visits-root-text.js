const {assert} = require('chai');

describe('User visits root', () => {

  describe('without existing messages', () => {
    it('starts blank', () => {
      browser.url('/');

      assert.equal(browser.getText('#messages'),'');
    });
  });

  describe('posting a message', () => {
    it('saves the message with the author information', () => {
      
      const message ='feature tests often hit every level of the TDD Testing Pyramid';
      const author = 'username';

      browser.url('/');
      browser.setValue('input[id=author]', author);
      browser.setValue('textarea[id=message]', message);
      browser.click('input[type=submit]');
      
      assert.include( browser.getText('#messages'), message);
      assert.include( browser.getText('#messages'), author);
 
    });
  });
});
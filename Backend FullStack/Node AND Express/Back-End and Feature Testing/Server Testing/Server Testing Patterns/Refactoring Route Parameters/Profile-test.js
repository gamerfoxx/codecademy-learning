const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');

const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};

describe('profile page', () => {
  describe('GET request', () => {
    it('greets alice', async () => {
        const response = await request(app).
        get('/profile/alice');
        assert.equal(parseTextFromHTML(response.text, '#welcome-message'), 'Welcome alice!');
    });
    it('greets bob', async () => {
        const response = await request(app).
        get('/profile/bob');
        assert.equal(parseTextFromHTML(response.text, '#welcome-message'), 'Welcome bob!');
    });
  });
});



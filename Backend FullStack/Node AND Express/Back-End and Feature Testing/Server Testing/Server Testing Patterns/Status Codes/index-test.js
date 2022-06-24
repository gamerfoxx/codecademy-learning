const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

describe('root page', () => {
  describe('GET request', () => {
    it('returns a 200 status', async () => {
      const response = await request(app).
      get('/');
      assert.equal(response.status, 200);
    });
  });
});
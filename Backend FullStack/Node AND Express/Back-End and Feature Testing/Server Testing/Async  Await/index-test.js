const request = require('supertest');

const app = require('../../app');

describe('the homepage', () => {
    it('returns the correct content', async () => {
        const response = await request(app).get('/');

        console.log(response.text);
    });
});

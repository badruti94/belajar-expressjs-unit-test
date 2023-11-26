const request = require('supertest');
const app = require('../src');

test('Hello World', async () => {
  const response = await request(app).get('/');
  console.log(response);
  expect(response.text).toBe('Hello World!');
});

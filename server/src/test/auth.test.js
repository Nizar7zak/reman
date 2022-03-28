/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const connection = require('../database/config/connection');
const buildDataBase = require('../database/config/build');

beforeEach(() => buildDataBase());

test('should return 401 status code when there is no token', (done) => {
  request(app)
    .get('/api/v1/checkAuth')
    .expect(401)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});

afterAll(() => connection.end());

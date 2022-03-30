/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const connection = require('../database/config/connection');
const buildDataBase = require('../database/config/build');

beforeEach(() => buildDataBase());

describe(' check auth and admin middleware', () => {
  it('should return 401 status code when there is no token', (done) => {
    request(app)
      .get('/api/v1/checkAuth')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  it('should return 403 status code when user is not admin', (done) => {
    request(app)
      .get('/api/v1/checkAuth')
      .expect(403)
      .set('Cookie', 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6Im5pemFyIiwiZW1haWwiOiJuaXphcjFAZ21haWwuY29tIiwiaXNhZG1pbiI6ZmFsc2UsImlhdCI6MTY0ODYyNzU0MX0.lDLKNFILTBQZGkhr8mPgVQtdJaMUjAPBPZ2aV_n3jfI')
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

afterAll(() => connection.end());

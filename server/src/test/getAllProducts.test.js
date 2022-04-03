/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const connection = require('../database/config/connection');
const buildDataBase = require('../database/config/build');

beforeEach(() => buildDataBase());

describe(' check get products by page number ', () => {
  it('should return 204 status code when the page is morethen products/No.pages', (done) => {
    request(app)
      .get('/api/v1/products?page=1000')
      .send()
      .expect(204)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  it('should return 200 status code when the page is equal products/No.pages', (done) => {
    request(app)
      .get('/api/v1/products?page=1')
      .send()
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('products loaded successfully');
        return done();
      });
  });
});

afterAll(() => connection.end());

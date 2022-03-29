/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const connection = require('../database/config/connection');

const buildDataBase = require('../database/config/build');
const {
  getAllUser,
  getUserByEmail,
} = require('../database/queries/user');
const { loginSchema } = require('../utils');
const { loginUserCases } = require('./userCases');

beforeEach(() => buildDataBase());

describe('login Validation', () => {
  it('should throw an error if password contain less than 7 characters', async () => {
    expect.assertions(1);
    try {
      await loginSchema.validateAsync(loginUserCases.invalidPassword);
    } catch (error) {
      expect(error.details[0].message).toBe(
        '"password" length must be at least 7 characters long',
      );
    }
  });

  it('should throw an error if email is invalid', async () => {
    expect.assertions(1);
    try {
      await loginSchema.validateAsync(loginUserCases.invalidEmail);
    } catch (error) {
      expect(error.details[0].message).toBe('"email" must be a valid email');
    }
  });
});

describe('check database based on login process', () => {
  it('should return 1 when search for a User email in current database', async () => {
    result = await getUserByEmail('nizar@gmail.com');
    expect(result.rowCount).toBe(1);
  });

  it('should return 0 when search for an email does not exist in current database', async () => {
    result = await getUserByEmail(loginUserCases.successUser.email);
    expect(result.rowCount).toBe(0);
  });

  it('should return 1 as a number of users when check number of user in current database', async () => {
    result = await getAllUser();
    expect(result.rowCount).toBe(1);
  });
});

describe('check route "api/v1/login" ', () => {
  it('should return 201 when we have a successfully user', (done) => {
    request(app)
      .post('/api/v1/login')
      .send(loginUserCases.oldUser)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

afterAll(() => connection.end());

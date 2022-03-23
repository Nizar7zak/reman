/* eslint-disable no-undef */
const connection = require('../database/config/connection');

const buildDataBase = require('../database/config/build');
const {
  getAllUser,
  insertNewUser,
  getUserByEmail,
} = require('../database/queries/user');
const { signUpSchema } = require('../utils');
const { userCases } = require('./userCases');

beforeEach(() => buildDataBase());

describe('SignUp Validation', () => {
  it('should throw an error if username contain less than 4 characters', async () => {
    expect.assertions(1);
    try {
      await signUpSchema.validateAsync(userCases.invaildUserName);
    } catch (error) {
      expect(error.details[0].message).toBe(
        '"name" length must be at least 4 characters long',
      );
    }
  });

  it('should throw an error if password contain less than 7 characters', async () => {
    expect.assertions(1);
    try {
      await signUpSchema.validateAsync(userCases.invalidPassword);
    } catch (error) {
      expect(error.details[0].message).toBe(
        '"password" length must be at least 7 characters long',
      );
    }
  });

  it('should throw an error if confirm Password does not match password', async () => {
    expect.assertions(1);
    try {
      await signUpSchema.validateAsync(userCases.notMatchPassword);
    } catch (error) {
      expect(error.details[0].message).toBe(
        '"confirmPassword" must be [ref:password]',
      );
    }
  });

  it('should throw an error if email is invalid', async () => {
    expect.assertions(1);
    try {
      await signUpSchema.validateAsync(userCases.invalidEmail);
    } catch (error) {
      expect(error.details[0].message).toBe('"email" must be a valid email');
    }
  });
});

describe('check database based on SignUp process', () => {
  it('should return 0 when search for a new User email in current database', async () => {
    result = await getUserByEmail(userCases.successUser.email);
    expect(result.rowCount).toBe(0);
  });
  it('should return 1 when new user regiester with an email exist in current database', async () => {
    result = await getUserByEmail('nizar@gmail.com');
    expect(result.rowCount).toBe(1);
  });
  it('should return 2 as a number of users when regiester a new user', async () => {
    await insertNewUser(userCases.successUser);
    result = await getAllUser();
    expect(result.rowCount).toBe(2);
  });
});

afterAll(() => connection.end());

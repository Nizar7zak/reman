/* eslint-disable no-undef */
const connection = require('../database/config/connection');
const buildDataBase = require('../database/config/build');

beforeEach(() => buildDataBase());

test('check users', () => connection
  .query('SELECT * FROM users')
  .then((data) => {
    expect(data.rows.length).toBe(2);
  }));

afterAll(() => connection.end());

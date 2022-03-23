/* eslint-disable no-undef */
const connection = require('../database/config/connection');
const buildDataBase = require('../database/config/build');
const { getAllUser, insertNewUser } = require('../database/queries/user');

beforeEach(() => buildDataBase());

describe('Number of Users', () => {
  it('should return 2 when you regiester a new user', async () => {
    await insertNewUser({ name: 'nizar', email: 'nizar123@gmail.com', password: '12341234123' });
    result = await getAllUser();
    expect(result.rowCount).toBe(2);
  });
});

afterAll(() => connection.end());

const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

const dataBasePath = join(__dirname, 'build.sql');
const fakeData = join(__dirname, 'fakeData.sql');

const buildDataBase = async () => {
  const sql = readFileSync(dataBasePath).toString();
  const fakeSQL = readFileSync(fakeData).toString();
  try {
    await connection.query(sql);
    await connection.query(fakeSQL);
  } catch (error) {
    console.log('err', error);
  }
};

module.exports = buildDataBase;

const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

const dataBasePath = join(__dirname, 'build.sql');

const sql = readFileSync(dataBasePath).toString();

const buildDataBase = async () => {
  try {
    await connection.query(sql);
  } catch (error) {
    throw new Error('Error in database');
  }
};

module.exports = buildDataBase;

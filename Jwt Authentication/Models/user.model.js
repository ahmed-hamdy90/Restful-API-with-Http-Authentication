'use strict';

const mongoDbAdapter = require('../adapters/mongoDbAdapter');

const userSchema = {
  name: 'string',
  email: 'string',
  password: 'string',
  role: 'number'
};

module.exports = mongoDbAdapter.createModel('user', userSchema);

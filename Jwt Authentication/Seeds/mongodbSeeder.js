(function() {
  'use strict';

  const userModel = require('../Models/user.model');
  const mongoDbAdapter = require('../Adapters/mongoDbAdapter');
  const roles = require('../Utils/roles');
  const passwordDcryptUtil = require('../Utils/passwordDcryptUtil');

  const loadDbDataSeed = function () {
    // intial Dummay user
    const firstUser = new userModel({
      name: 'Ahmed Hamdy',
      email: 'ahmedhamdy90@gmail.com',
      password: passwordDcryptUtil.generatePassword('123456'),
      role: roles.ADMIN
    });

    // save this user on mongodb
    mongoDbAdapter.save(
      firstUser,
      function (result) {
        console.log(result);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  loadDbDataSeed();
})();

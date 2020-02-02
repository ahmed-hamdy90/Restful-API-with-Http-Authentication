(function() {
  'use strict';

  const mongoDbAdapter = require('../Adapters/mongoDbAdapter');
  const userModel = require('../Models/user.model');

  const loadDbDataSeed = function () {
    // intial Dummay user
    const firstUser = new userModel({
      name: 'Ahmed Hamdy',
      email: 'ahmedhamdy90@gmail.com',
      password: '',
      role:
    })

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
  }

  loadDbDataSeed();
})();

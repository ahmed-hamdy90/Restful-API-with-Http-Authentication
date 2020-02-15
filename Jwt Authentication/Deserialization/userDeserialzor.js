(function() {
  'use strict';

  const Deserializor = require('./deserializor');
  const User = require('../Entities/user');

  /**
   * User Deserializor class for user entity
   */
  class UserDeserializor extends Deserializor {

      /**
       * {@inheritDoc}
       */
      deserialize(input) {
          const user = new User();
          user.id = parseInt(input.id);
          user.name = input.name;
          user.email = input.email;
          user.role = input.role;

          return user;
      }
  }

  model.export = UserDeserializor;
})();
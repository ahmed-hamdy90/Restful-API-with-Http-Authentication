(function() {
  'use strict';

  const AbstractEntity = require('./abstractEntity');

  /**
   * User Entity
   */
  class User extends AbstractEntity {

    /**
     * user's id
     * @var number
     */
    id;

    /**
     * user's name
     * @var string
     */
    name;

    /**
     * user's email
     * @var string
     */
    email;

    /**
     * user's role
     * @var number
     */
    role;
  }

  model.export = User;
})();

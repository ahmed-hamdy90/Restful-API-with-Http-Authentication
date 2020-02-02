(function() {
  'use strict';

  // load modules
  const bcrypt = require('bcrypt');
  
  const saltRounds = 2020;

  /**
   * Password Dcryption utitlity class
   */
  class PasswordDcryptUtils {

    /**
     * Generate and Create dcrypted password
     * @param  {string} pass plain password value wanted to decrypt
     * @return {string} decrypted password
     */
    static generatePassword(pass) {
      const salt = bcrypt.genSaltSync(saltRounds);
      return bcrypt.hashSync(pass, salt);
    }

    /**
     * Determine whether given two password was idenetical or not
     * @param  {string} firstPass  first password value
     * @param  {string} secondPass second password value
     * @return {boolean} True if was identical, otherwise False
     */
    static comparePassword(firstPass, secondPass) {
      return bcrypt.compareSync(firstPass, secondPass);
    }
  }

  module.exports = PasswordDcryptUtils;
})();

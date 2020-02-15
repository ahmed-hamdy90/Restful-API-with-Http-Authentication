(function() {
  'use strict';

  const AbstractMapper = require('./abstractMapper');
  const UserDeserializor = require('../Deserialization/userDeserialzor');
  const UserModel = require('../Models/user.model');

  /**
   * User Mapper class represent database operations wrapper for user details
   */
  class UserMapper extends AbstractMapper {

    /**
     * Retrieve User by id
     * @param {number} id user' id value wanted to get
     * @param {function} successCallback success callback listener instance
     * @param {function} errorCallback error callback listener instance
     */
    getUserBy(id, successCallback, errorCallback) {
      this.mongoDbAdapter
          .findById(
              new UserModel(),
              id,
              function (result) {
                  const user = new UserDeserializor().deserialize(result);
                  successCallback(user);
              },
              errorCallback
          );
    }

    /**
     * Retrieve User by id
     * @param {Object} criteria criteria object according to it retrieve
     * @param {function} successCallback success callback listener instance
     * @param {function} errorCallback error callback listener instance
     */
    getUsers(criteria, successCallback, errorCallback) {
      this.mongoDbAdapter
          .find(
              new UserModel(),
              criteria,
              function (result) {
                const users = [];
                if (result && result instanceof Array) {
                  result.forEach(
                      (user, index, users) => users.push(new UserDeserializor().deserialize(user))
                  )
                }
              },
              errorCallback
          )
    }

    /**
     * Retrieve User by id
     * @param {Object} user criteria object according to it retrieve
     * @param {function} successCallback success callback listener instance
     * @param {function} errorCallback error callback listener instance
     */
    saveUser(user, successCallback, errorCallback) {
        this.mongoDbAdapter
            .save(
              new UserModel({
                 name: user.name,
                 email: user.email,
                 password: user.password,
                 role: user.role
              }),
              successCallback,
              errorCallback
            );
    }

  }

  model.exports = UserMapper;
})();
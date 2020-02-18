'use strict';

// load modules
const mongoose = require('mongoose');

const environment = process.env.NODE_ENV || 'development';
const configuration = require(`../Config/config.${environment}.json`);

/**
 * Mongo DB adapter class which wrapping mongoose
 */
class MongoDbAdapter {

  adapter;

  /**
   * MongoDbAdapter constructor
   * @param {mongoose} mongo mongoose instance
   * @param {Object} config configuration josn object
   */
  constructor(mongo, config) {
    const dbUri = 'mongodb://' + config.host + '/' + config.database;
    const dbOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    mongo.connect(dbUri, dbOptions);
    this.adapter = mongo;
  }

  /**
   * Create and initialize mongoose model
   * @param {string} name model's name
   * @param {object} schema schema for model
   */
  createModel(name, schema) {
    return this.adapter.model(name, new this.adapter.Schema(schema));
  }

  /**
   * Saving model details on mongodb
   * @param {Object} model mongoose model instance
   * @param {function} successCallback success callback listener instance
   * @param {function} errorCallback error callback listener instance
   */
  save(model, successCallback, errorCallback) {
    model.save((err, result) => {
      if (err) {
        errorCallback(err);
        return;
      }
      successCallback(result);
    });
  }

  /**
   * find a model details on mongodb using it's id
   * @param {Object} model mongoose model instance
   * @param {number} id given model's id value
   * @param {function} successCallback success callback listener instance
   * @param {function} errorCallback error callback listener instance
   */
  findById(model, id, successCallback, errorCallback) {
    model.findById(id, (err, result) => {
      if (err) {
        errorCallback(err);
        return;
      }
      successCallback(result);
    });
  }

  /**
   * finding models details on mongodb using criteria
   * @param {Object} model mongoose model instance
   * @param {Object} criteria search criteria for models
   * @param {function} successCallback success callback listener instance
   * @param {function} errorCallback error callback listener instance
   */
  find(model, criteria, successCallback, errorCallback) {
    model.find(criteria, (err, result) => {
      if (err) {
        errorCallback(err);
        return;
      }
      successCallback(result);
    });
  }
}

module.exports = new MongoDbAdapter(mongoose, configuration.database.mongodb);

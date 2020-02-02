(function () {
    'use strict';

    // load modules
    const mongoose = require('mongoose');

    const environment = process.env.NODE_ENV || 'development';
    const dbConfig = require(`../Config/config.${environment}.json`);

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
            }
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
         * @param  {Object} model mongoose model instance
         * @param  {function} successCallbak success callback listenter instance
         * @param  {function} errorCallbak   error callback listenter instance
         */
        save(model, successCallbak, errorCallbak) {
            model.save((err, result) => {
                if (err) {
                    errorCallbak(err);
                    return;
                }
                successCallbak(result);
            });
        }

        /**
         * find a model details on mongodb using it's id
         * @param  {Object} model mongoose model instance
         * @param  {number} id  id value of model's instance
         * @param  {function} successCallbak success callback listenter instance
         * @param  {function} errorCallbak   error callback listenter instance
         */
        findById(model, id, successCallbak, errorCallbak) {
            model.findById(id, (err, result) => {
                if (err) {
                    errorCallbak(err);
                    return;
                }
                successCallbak(result);
            });
        }

        /**
        * finding models details on mongodb using criteria
        * @param  {Object} model mongoose model instance
        * @param  {Object} criteria search criteria for models
        * @param  {function} successCallbak success callback listenter instance
        * @param  {function} errorCallbak   error callback listenter instance
        */
        find(model, criteria, successCallbak, errorCallbak) {
            model.find(criteria, (err, result) => {
                if (err) {
                    errorCallbak(err);
                    return;
                }
                successCallbak(result);
            });
        }
    }

    module.exports = new MongoDbAdapter(mongoose, dbConfig.database.mongodb);
})();

(function() {
  'use strict';

  /**
   * AbstractMapper represent parent class for any mapper classes
   */
  class AbstractMapper {

      mongoDbAdapter;

      /**
       * AbstractMapper constructor
       * @param {MongoDbAdapter} adapter mongoDb adapter instance
       */
      constructor(adapter) {
          this.mongoDbAdapter = adapter;
      }
  }

  model.export = AbstractMapper;
})();
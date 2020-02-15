(function() {
  'use strict';

    /**
     * Deserializor class represent parent class for any  entity class data deserializor
     */
  class Deserializor {

    /**
     * deserializing given row data into an entity object
     * @param input row data
     * @return {AbstractEntity}
     */
    deserialize(input) {};
  }

  model.export = Deserializor;
})();

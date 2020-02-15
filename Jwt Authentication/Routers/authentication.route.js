(function () {
  'use strict';

  // load modules
  const express = require('express');


  // initilaize express's router instance
  const router = express.Router();

  router.post('/', (req, res) => {
    res.json('Test');

  });

  module.exports = router;
})();

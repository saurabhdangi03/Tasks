const express = require('express');
const db = require('../data/database');
const router = express.Router();
const methodOverride = require('method-override');
// Override with POST having ?_method=PUT or ?_method=DELETE
router.use(methodOverride('_method'));
 



db.addStudent('Alice', 21, 'A')
  .then(() => {
    console.log('Student added successfully');
  })
  .catch(err => {
    console.error('Failed to add student:', err);
  });

  module.exports = router;

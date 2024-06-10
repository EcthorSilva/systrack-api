const express = require('express');
const router = express.Router();

/* Add routes */
const diskRoutes = require('./diskRoutes');
const memoryRoutes = require('./memoryRoutes');

router.use('/disk', diskRoutes);
router.use('/memory', memoryRoutes);

module.exports = router;
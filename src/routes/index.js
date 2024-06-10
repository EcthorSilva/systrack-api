const express = require('express');
const router = express.Router();

/* Add routes */
const diskRoutes = require('./diskRoutes');
const memoryRoutes = require('./memoryRoutes');
const batteryRoutes = require('./batteryRoutes');

router.use('/disk', diskRoutes);
router.use('/memory', memoryRoutes);
router.use('/battery', batteryRoutes);

module.exports = router;
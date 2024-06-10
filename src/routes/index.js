const express = require('express');
const router = express.Router();

/* Add routes */
const diskRoutes = require('./diskRoutes');
const memoryRoutes = require('./memoryRoutes');
const batteryRoutes = require('./batteryRoutes');
const networkRoutes = require('./networkRoutes');

router.use('/disk', diskRoutes);
router.use('/memory', memoryRoutes);
router.use('/battery', batteryRoutes);
router.use('/network', networkRoutes);

module.exports = router;
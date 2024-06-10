const express = require('express');
const router = express.Router();
const diskRoutes = require('./diskRoutes');

router.use('/disk', diskRoutes);

module.exports = router;
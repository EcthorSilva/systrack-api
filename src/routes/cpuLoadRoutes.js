const express = require('express');
const cpuLoadController = require('../controllers/cpuLoadController');

const router = express.Router();

router.get('/', cpuLoadController.getCpuLoadInfo);

module.exports = router;
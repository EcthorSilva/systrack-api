const express = require('express');
const router = express.Router();
const gpuController = require('../controllers/gpuController');

router.get('/', gpuController.getGpuInfo);

module.exports = router;
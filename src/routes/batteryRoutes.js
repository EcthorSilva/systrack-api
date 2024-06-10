const express = require('express');
const batteryController = require('../controllers/batteryController');

const router = express.Router();

router.get('/', batteryController.getBattery);

module.exports = router;
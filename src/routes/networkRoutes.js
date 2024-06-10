const express = require('express');
const networkController = require('../controllers/networkController');

const router = express.Router();

router.get('/', networkController.getNetworkInfo);

module.exports = router;
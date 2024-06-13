const express = require('express');
const router = express.Router();
const diskController = require('../controllers/diskController');

router.get('/', diskController.getDisks);

module.exports = router;

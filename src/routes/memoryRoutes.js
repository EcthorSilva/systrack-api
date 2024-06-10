const express = require('express');
const memoryController = require('../controllers/memoryController');

const router = express.Router();

router.get('/', memoryController.getMemory);

module.exports = router;
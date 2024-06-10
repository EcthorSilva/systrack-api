const express = require('express');
const router = express.Router();
const diskController = require('../controllers/diskController');

// Rota para obter informações dos discos
router.get('/', diskController.getDisks);

module.exports = router;

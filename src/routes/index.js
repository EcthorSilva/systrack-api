const express = require('express');
const router = express.Router();

// Adicionando a mensagem de boas-vindas na rota raiz
router.get('/', (req, res) => {
   res.send('SysTrack API v1.0.0');
});

/* Add routes */
const diskRoutes = require('./diskRoutes');
const memoryRoutes = require('./memoryRoutes');
const batteryRoutes = require('./batteryRoutes');
const networkRoutes = require('./networkRoutes');
const cpuLoadRoutes = require('./cpuLoadRoutes');

router.use('/disk', diskRoutes);
router.use('/memory', memoryRoutes);
router.use('/battery', batteryRoutes);
router.use('/network', networkRoutes);
router.use('/cpu-load', cpuLoadRoutes);

module.exports = router;
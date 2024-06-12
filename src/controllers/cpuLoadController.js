const cpuLoadService = require('../services/cpuLoadService');

let cpuLoadInfo = {
   currentLoad: 0,
   currentLoadSystem: 0,
   currentLoadUser: 0,
   currentLoadNice: 0
};

async function getCpuLoadInfo(req, res) {
   try {
      // Updates CPU load data with each API call
      cpuLoadInfo = await cpuLoadService.getCpuLoadInfo();

      res.json(cpuLoadInfo);
   } catch (error) {
      console.error('Error retrieving CPU load information:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}

module.exports = {
   getCpuLoadInfo
};
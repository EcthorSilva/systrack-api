const cpuLoadService = require('../services/cpuLoadService');

async function getCpuLoadInfo(req, res, next) {
   try {
      const diskInfo = await cpuLoadService.getCpuLoadInfo();
      res.json(diskInfo);
   } catch (error) {
      next(error);
   }
}

module.exports = {
   getCpuLoadInfo
};
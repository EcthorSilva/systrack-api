const gpuService = require('../services/gpuService');

async function getGpuInfo(req, res, next) {
   try {
      const diskInfo = await gpuService.getGpuInfo();
      res.json(diskInfo);
   } catch (error) {
      next(error);
   }
}

module.exports = {
   getGpuInfo
};
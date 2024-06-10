const diskService = require('../services/diskService');

async function getDisks(req, res, next) {
   try {
      const diskInfo = await diskService.getDiskInfo();
      res.json(diskInfo);
   } catch (error) {
      next(error);
   }
}

module.exports = {
   getDisks
};
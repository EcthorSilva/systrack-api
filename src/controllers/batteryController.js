const batteryService = require('../services/batteryService');

async function getBattery(req, res) {
   try {
      const batteryInfo = await batteryService.getBatteryInfo();
      res.json(batteryInfo);
   } catch (error) {
      res.status(500).send('Error retrieving battery information');
   }
}

module.exports = {
   getBattery
};
const networkService = require('../services/networkService');

let networkStats = { rx_sec: 0, tx_sec: 0 };

// Update network stats every second
async function updateNetworkStats() {
   try {
      networkStats = await networkService.getNetworkStats('Ethernet');
   } catch (error) {
      console.error('Error updating network statistics:', error);
   }
}

// Start updating network stats every second
setInterval(updateNetworkStats, 1000);

async function getNetworkInfo(req, res) {
   try {
      res.json(networkStats);
   } catch (error) {
      console.error('Error retrieving network information:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}

module.exports = {
   getNetworkInfo
};
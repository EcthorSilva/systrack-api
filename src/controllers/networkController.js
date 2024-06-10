const networkService = require('../services/networkService');

let networkStats = { rx_sec: 0, tx_sec: 0 };

async function getNetworkInfo(req, res) {
   try {
      // Updates network status data with each API call
      networkStats = await networkService.getNetworkStats('Ethernet');
      
      res.json(networkStats);
   } catch (error) {
      console.error('Error retrieving network information:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}

module.exports = {
   getNetworkInfo
};

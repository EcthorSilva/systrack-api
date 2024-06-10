const si = require('systeminformation');

async function getNetworkStats(iface = 'default') {
   try {
      const stats = await si.networkStats(iface);

      const networkStats = {
         down: (stats[0].rx_sec / 1024).toFixed(2), // received bytes per second to kb/s
         up: (stats[0].tx_sec / 1024).toFixed(2) // transferred bytes per second to kb/s
      };

      console.log('Network statistics:', networkStats);

      return networkStats;
   } catch (error) {
      console.error('Error retrieving network statistics:', error);
      throw error;
   }
}

module.exports = {
   getNetworkStats
};
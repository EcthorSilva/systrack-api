const si = require('systeminformation');

async function getCpuLoadInfo() {
   try {
      const Load = await si.currentLoad();

      const LoadInfo = {
         Load: Load.currentLoad.toFixed(2), // CPU load in %
         systemLoad: Load.currentLoadSystem.toFixed(2), // CPU load system in %
         userLoad: Load.currentLoadUser.toFixed(2), // CPU load user in %
         niceLoad: Load.currentLoadNice.toFixed(2) // CPU load nice in %
      };

      console.log(LoadInfo);

      return LoadInfo;
   } catch (error) {
      console.error('Error retrieving CPU Load information:', error);
      throw error;
   }
}

module.exports = {
   getCpuLoadInfo
};
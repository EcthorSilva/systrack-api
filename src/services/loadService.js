const si = require('systeminformation');

async function getLoadInfo() {
   try {
      const Load = await si.currentLoad();

      const LoadInfo = {
         avgLoad: Load.avgLoad.toFixed(2),
         systemLoad: Load.currentLoadSystem.toFixed(2),
         userLoad: Load.currentLoadUser.toFixed(2),
         niceLoad: Load.currentLoadNice.toFixed(2)
      };

      console.log(LoadInfo);

      return LoadInfo;
   } catch (error) {
      console.error('Error retrieving memory information:', error);
      throw error;
   }
}

// module.exports = {
//    getMemoryInfo
// };
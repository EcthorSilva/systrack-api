const si = require('systeminformation');

async function getMemoryInfo() {
   try {
      const memory = await si.mem();

      const memoryInfo = {
         total: memory.total, // total memory in bytes
         free: memory.free, // not used in bytes
         active: memory.active, // used actively (excl. buffers/cache)
         cached: memory.cached, // used by cache
         usedPercent: ((memory.total - memory.free) / memory.total * 100).toFixed(2) // used memory in percentage
      };

      return memoryInfo;
   } catch (error) {
      console.error('Error retrieving memory information:', error);
      throw error;
   }
}

module.exports = {
   getMemoryInfo
};
const si = require('systeminformation');

async function getGpuInfo() {
   try {
      const gpus = await si.graphics();

      const gpuInfo = gpus.controllers.map(gpu => ({
         model: gpu.model, // GPU model
         vendor: gpu.vendor, // GPU vendor
         vram: gpu.vram, // VRAM size in MB
         usage: gpu.utilizationGpu, // GPU utilization in % (only nvidia)
         memoryUsage: gpu.utilizationMemory, // Memory utilization in % (only nvidia)
         temperature: gpu.temperatureGpu // GPU temperature in °C (only nvidia)
      }));

      console.log(gpuInfo);

      return gpuInfo;
   } catch (error) {
      console.error('Error retrieving GPU information:', error);
      throw error;
   }
}

module.exports = {
   getGpuInfo
};

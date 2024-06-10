const si = require('systeminformation');

async function getDiskInfo() {
   try {
      const disks = await si.diskLayout();
      const blockDevices = await si.blockDevices();
      const fsSizes = await si.fsSize();

      const diskInfo = disks.map(disk => {
         const blockDevice = blockDevices.find(device => device.device === disk.device);
         const fsSize = fsSizes.find(fs => fs.fs === blockDevice?.mount);

         return {
            device: disk.device,
            type: disk.type,
            label: blockDevice?.label || 'Unknown',
            name: blockDevice?.name || 'Unknown',
            size: fsSize?.size || 0,
            used: fsSize?.used || 0,
            use: fsSize?.use || 0
         };
      });

      return diskInfo;
   } catch (error) {
      console.error('Error retrieving disk information:', error);
      throw error;
   }
}

module.exports = {
   getDiskInfo
};
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
            device: disk.device, // e.g. /dev/sda
            type: disk.type, // HD, SSD, NVMe
            label: blockDevice?.label || 'Unknown', // label
            name: blockDevice?.name || 'Unknown', // name
            size: fsSize?.size || 0, // sizes in bytes
            used: fsSize?.used || 0, // used in bytes
            use: fsSize?.use || 0 // used in %
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
const si = require('systeminformation');

async function getBatteryInfo() {
   try {
      const battery = await si.battery();

      const batteryInfo = {
         hasBattery: battery.hasBattery, // indicates presence of battery
         cycleCount: battery.cycleCount, // numbers of recharges
         isCharging: battery.isCharging, // indicates if battery is charging
         maxCapacity: battery.maxCapacity, // max capacity of battery (mWh)
         currentCapacity: battery.currentCapacity, //	current capacity of battery (mWh)
         designedCapacity: battery.designedCapacity, // designed capacity of battery (mWh)
         percent: battery.percent, // remaining energy in percentage
         acConnected: battery.acConnected, // indicates if AC is connected 
         health: calculateBatteryHealth(battery)
      };

      console.log(batteryInfo);

      return batteryInfo;
   } catch (error) {
      console.error('Error retrieving battery information:', error);
      throw error;
   }
}

function calculateBatteryHealth(battery) {
   const currentCapacity = battery.currentCapacity;
   const designedCapacity = battery.designedCapacity;

   if (!currentCapacity || !designedCapacity) {
      return 0; // Health is unknown if any of the required values are missing
   }

   const health = (currentCapacity / designedCapacity) * 100;

   return health.toFixed(2);
}

module.exports = {
   getBatteryInfo
};
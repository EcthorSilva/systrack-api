const si = require('systeminformation');

async function getBatteryInfo() {
   try {
      const battery = await si.battery();

      const batteryInfo = {
         hasBattery: battery.hasbattery, // indicates presence of battery
         cycleCount: battery.cyclecount, // numbers of recharges
         isCharging: battery.ischarging, // indicates if battery is charging
         maxCapacity: battery.maxcapacity, // 	max capacity of battery (mWh)
         currentCapacity: battery.currentcapacity, //	current capacity of battery (mWh)
         percent: battery.percent, // remaining energy in percentage
         acConnected: battery.acConnected // indicates if AC is connected
      };

      return batteryInfo;
   } catch (error) {
      console.error('Error retrieving battery information:', error);
      throw error;
   }
}

module.exports = {
   getBatteryInfo
};
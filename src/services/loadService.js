const si = require('systeminformation');

async function getLoadInfo() {
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
      console.error('Error retrieving memory information:', error);
      throw error;
   }
}

getLoadInfo();

setInterval(() => {
   getLoadInfo().then(({ Load, systemLoad, userLoad, niceLoad }) => {
      console.log('Uso da CPU:', Load + '%');
      console.log('Uso do sistema:', systemLoad + '%');
      console.log('Uso do usuário:', userLoad +'%');
      console.log('Uso do nice:', niceLoad + '%');
   }).catch(error => {
      console.error('Erro ao obter informações de uso da CPU:', error);
   });
}, 1000); // Intervalo de 1 segundo


// module.exports = {
//    getMemoryInfo
// };
const memoryService = require('../services/memoryService');

async function getMemory(req, res) {
    try {
        const memoryInfo = await memoryService.getMemoryInfo();
        res.json(memoryInfo);
    } catch (error) {
        res.status(500).send('Error retrieving memory information');
    }
}

module.exports = {
    getMemory
};

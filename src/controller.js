const axios = require('axios');
const prometheus = require('./prometheus');
const client = require('prom-client');
const { logger } = require('./config');

async function getGeneralData() {
    try {
        const res = await axios.get(`https://oapi.raveos.com/v1/get_workers`, {
            headers: {
                'X-Auth-Token': `${process.env.AUTH_TOKEN}`
            }
        });
        return res.data;
    } catch (error) {
        logger.error(error);
        return {};
    }
}

async function workerData(generalData) {
    try {
        const result = [];
        for(const g of generalData) {
            const res = await axios.get(`https://oapi.raveos.com/v1/get_worker_info/${g.id}`, {
                headers: {
                    'X-Auth-Token': `${process.env.AUTH_TOKEN}`
                }
            });
            
            result.push(res.data);
        }
        return result;
    } catch (error) {
        logger.error(error);
        return [];
    }
}

async function getMetrics(req, res) {
    client.register.resetMetrics();

    const { coins, workers, wallets } = await getGeneralData();
    const detailedWorkersData = await workerData(workers);
    prometheus.makeMetrics(workers, detailedWorkersData);

    res.set('content-type', 'text/plain; version=0.0.4');
    res.send(await client.register.metrics());
}

module.exports = {
    getMetrics
};
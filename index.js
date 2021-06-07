require('dotenv').config();
const express = require('express');
const port = 8080;
const app = express();
const { getMetrics } = require('./src/controller');
const { logger } = require('./src/config');
  
  
async function main() {
    app.get('/metrics', getMetrics);
    
    app.listen(port, () => {
        logger.info(`Raveos exporter at http://localhost:${port}`)
    });
}

main();
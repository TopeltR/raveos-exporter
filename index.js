const axios = require('axios');
const express = require('express');
const port = 8080;
const app = express();
const { getMetrics } = require('../RaveOS exporter/src/controller');

  
  
async function main() {
    app.get('/metrics', getMetrics);
    
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
}

main();
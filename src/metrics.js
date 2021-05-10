const client = require('prom-client');
const labels = ['id','name','os_version', 'lan_ip', 'wan_ip']
const infoLabels = ['id','name', 'sw_version','os_build_no','os_kernel','sw_build','gpu_drivers'];
const mpuLabels = ['id','name','rig_name', 'memory_total','memory_type', 'vbios'];
const cpuLabels = ['name'];


const workerInfo = new client.Gauge({
    name: 'raveos_worker_info',
    help: 'Shows the system info of a RaveOS worker',
    labelNames: infoLabels
});

const workerUptime = new client.Gauge({
    name: 'raveos_worker_uptime',
    help: 'Shows the uptime of RaveOS worker',
    labelNames: labels
});

const workerHashrate = new client.Gauge({
    name: 'raveos_worker_hashrate',
    help: 'Shows the hashrate of RaveOS worker',
    labelNames: labels
});

const workerTemperature = new client.Gauge({
    name: 'raveos_worker_temperature',
    help: 'Shows the hashrate of RaveOS worker',
    labelNames: labels
});

const mpuFanPercent = new client.Gauge({
    name: 'raveos_worker_gpu_fan_percent',
    help: 'Shows the fan percent of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuFanRpm = new client.Gauge({
    name: 'raveos_worker_gpu_fan_rpm',
    help: 'Shows the fan rpm of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuHashrate = new client.Gauge({
    name: 'raveos_worker_gpu_hashrate',
    help: 'Shows the hashrate of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuTemp = new client.Gauge({
    name: 'raveos_worker_gpu_temp',
    help: 'Shows the temperature of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuSharesAccepted = new client.Gauge({
    name: 'raveos_worker_gpu_shares_accepted',
    help: 'Shows the amount of accepted shares of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuSharesBad = new client.Gauge({
    name: 'raveos_worker_gpu_shares_bad',
    help: 'Shows the amount of bad shares of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuSharesInvalid = new client.Gauge({
    name: 'raveos_worker_gpu_shares_invalid',
    help: 'Shows the amount of invalid shares of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuSharesRejected = new client.Gauge({
    name: 'raveos_worker_gpu_shares_rejected',
    help: 'Shows the amount of rejected shares of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuCoreOC = new client.Gauge({
    name: 'raveos_worker_gpu_oc_core_clock',
    help: 'Shows the core overclock of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuMemoryClock = new client.Gauge({
    name: 'raveos_worker_gpu_oc_memory_clock',
    help: 'Shows the core overclock of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuPowerLimit = new client.Gauge({
    name: 'raveos_worker_gpu_oc_power',
    help: 'Shows the power limit of one GPU in one worker',
    labelNames: mpuLabels
});

const mpuFanLimit = new client.Gauge({
    name: 'raveos_worker_gpu_oc_fan',
    help: 'Shows the fan limit of one GPU in one worker',
    labelNames: mpuLabels
});

const workerCpuCoreCount = new client.Gauge({
    name: 'raveos_worker_cpu_core_count',
    help: 'Shows the  core count of cpu in one worker',
    labelNames: cpuLabels
});


module.exports = {
    workerInfo,
    workerUptime,
    workerHashrate,
    mpuFanPercent,
    mpuFanRpm,
    mpuHashrate,
    mpuTemp,
    mpuPowerLimit,
    mpuMemoryClock,
    mpuCoreOC,
    mpuSharesAccepted,
    mpuSharesBad,
    mpuSharesInvalid,
    mpuSharesRejected,
    workerTemperature,
    mpuFanLimit,
    workerCpuCoreCount
};
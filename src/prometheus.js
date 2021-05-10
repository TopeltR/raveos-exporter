const metrics =  require('./metrics');


function makeMetrics(generalWorkers, workerSpecifics) {
    generalWorkers.forEach(worker => {
        const labels = {
            id: worker.id,
            name: worker.name,
            os_version: worker.os_version,
            lan_ip: worker.lan_ip,
            wan_ip: worker.wan_ip
        };

        metrics.workerUptime.set(labels, worker.uptime);
        metrics.workerHashrate.set(labels, worker.hashrate);
        metrics.workerTemperature.set(labels, worker.temp);
    });
    workerSpecifics.forEach(ws => {
        const workerLabels = {
            id: ws.id,
            name: ws.name,
            sw_version: ws.sys_info.sw_version,
            os_build_no: ws.sys_info.os_build_no,
            os_kernel: ws.sys_info.os_kernel,
            sw_build: ws.sys_info.sw_build,
            gpu_drivers: ws.sys_info.gpu_drivers            
        };
        metrics.workerCpuCoreCount.set({name: ws.sys_info.cpu_info.name}, ws.sys_info.cpu_info.core_count)

        ws.mpu_list.forEach( mpu => {
            const mpuLabels = {
                id: mpu.id,
                name: mpu.name,
                memory_total: mpu.memory_total,
                memory_type: mpu.memory_type,
                vbios: mpu.vbios,
                rig_name: ws.name,
            };

            // General 
            metrics.mpuFanPercent.set(mpuLabels, mpu.fan_percent);
            metrics.mpuFanRpm.set(mpuLabels, mpu.fan_rpm);
            metrics.mpuHashrate.set(mpuLabels, mpu.hashrate);
            metrics.mpuTemp.set(mpuLabels, mpu.temp);

            // Shares metrics
            metrics.mpuSharesAccepted.set(mpuLabels, mpu.shares.accepted);
            metrics.mpuSharesBad.set(mpuLabels, mpu.shares.bad);
            metrics.mpuSharesInvalid.set(mpuLabels, mpu.shares.invalid);
            metrics.mpuSharesRejected.set(mpuLabels, mpu.shares.rejected);

            // Oc metrics
            if (mpu.oc_config) {
                metrics.mpuCoreOC.set(mpuLabels, mpu.oc_config.core_clock);
                metrics.mpuMemoryClock.set(mpuLabels, mpu.oc_config.memory_clock);
                metrics.mpuPowerLimit.set(mpuLabels, mpu.oc_config.power);
                metrics.mpuFanLimit.set(mpuLabels, mpu.oc_config.fan);
            }
        })

        metrics.workerInfo.set(workerLabels, 1);
    })
}

module.exports = {
    makeMetrics
};
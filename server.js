const cron = require('cron');
const InfluxDB = require('influx').InfluxDB;

const config = {
    influx: require('./config/influx'),
    openWeather: require('./config/open-weather'),
};

console.log(config);

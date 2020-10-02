const { InfluxDB, FieldType } = require('influx');
const {
    INFLUX_HOST,
    INFLUX_PORT,
    INFLUX_USERNAME,
    INFLUX_PASSWORD,
    INFLUX_DATABASE,
} = require('../config/influx');

function getConnection() {
    return new InfluxDB({
        host: INFLUX_HOST,
        port: INFLUX_PORT,
        username: INFLUX_USERNAME,
        password: INFLUX_PASSWORD,
        database: INFLUX_DATABASE,
        schema: [
            {
                measurement: 'sun',
                fields: {
                    sunrise: FieldType.INTEGER,
                    sunset: FieldType.INTEGER,
                },
                tags: [],
            },
            {
                measurement: 'temperature',
                fields: {
                    temperature: FieldType.FLOAT,
                    perception: FieldType.FLOAT,
                    atmospheric: FieldType.FLOAT,
                },
                tags: [],
            },
            {
                measurement: 'wind',
                fields: {
                    speed: FieldType.FLOAT,
                    degrees: FieldType.FLOAT,
                    gust: FieldType.FLOAT,
                },
                tags: [],
            },
            {
                measurement: 'precipitation',
                fields: {
                    rain: FieldType.FLOAT,
                    snow: FieldType.FLOAT,
                },
                tags: [],
            },
            {
                measurement: 'other',
                fields: {
                    pressure: FieldType.INTEGER,
                    humidity: FieldType.INTEGER,
                    visibility: FieldType.INTEGER,
                    clouds: FieldType.INTEGER,
                    uvi: FieldType.FLOAT,
                },
                tags: [],
            },
            {
                measurement: 'meta',
                fields: {
                    weather_condition_code: FieldType.INTEGER,
                },
                tags: [],
            },
        ],
    });
}

module.exports = {
    getConnection,
}

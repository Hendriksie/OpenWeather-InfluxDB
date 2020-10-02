const { getConnection } = require('./database/influx');

async function saveData(data) {
    const current = data.current;
    const sun = {
        sunrise: current.sunrise,
        sunset: current.sunset,
    }
    const temperature = {
        temperature: current.temp,
        perception: current.feels_like,
        atmospheric: current.dew_point,
    }
    const wind = {
        speed: current.wind_speed,
        degrees: current.wind_deg,
        gust: current.wind_gust,
    }
    const precipitation = {
        rain: (current.rain) ? current.rain['1h'] : 0,
        snow: (current.snow) ? current.snow['1h'] : 0,
    }
    const other = {
        pressure: current.pressure,
        humidity: current.humidity,
        visibility: current.visibility,
        clouds: current.clouds,
        uvi: current.uvi,
    }
    const meta = {
        weather_condition_code: current.weather[0].id,
    }

    const database = getConnection();

    await database.writePoints([
        {
            measurement: 'sun',
            fields: sun,
            tags: {},
        },
        {
            measurement: 'temperature',
            fields: temperature,
            tags: {},
        },
        {
            measurement: 'wind',
            fields: wind,
            tags: {},
        },
        {
            measurement: 'precipitation',
            fields: precipitation,
            tags: {},
        },
        {
            measurement: 'other',
            fields: other,
            tags: {},
        },
        {
            measurement: 'meta',
            fields: meta,
            tags: {},
        },
    ]);
}

module.exports = {
    saveData,
}

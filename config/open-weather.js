const OW_URL = process.env.OW_URL || 'https://api.openweathermap.org/data/2.5/weather';
const OW_API_KEY = process.env.OW_API_KEY || '';
const OW_UNITS = process.env.OW_UNITS || 'metrics';
const OW_CITY_ID = process.env.OW_CITY_ID || '';

const OW_ENDPOINT = `${OW_URL}?appid=${OW_API_KEY}&units=${OW_UNITS}&id=${OW_CITY_ID}`

module.exports = {
    OW_ENDPOINT,
}

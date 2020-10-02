const OW_URL = process.env.OW_URL || 'https://api.openweathermap.org/data/2.5/onecall';
const OW_API_KEY = process.env.OW_API_KEY || '';
const OW_UNITS = process.env.OW_UNITS || 'metric';
const OW_LAT = process.env.OW_LAT || '';
const OW_LON = process.env.OW_LON || '';
const OW_LANG = process.env.OW_LANG || 'en';

const OW_ENDPOINT = `${OW_URL}?appid=${OW_API_KEY}&units=${OW_UNITS}&lat=${OW_LAT}&lon=${OW_LON}&lang=${OW_LANG}`;

module.exports = {
    OW_ENDPOINT,
}

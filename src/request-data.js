const https = require('https');
const { OW_ENDPOINT } = require('./config/open-weather');

async function requestData() {
    return new Promise((resolve, reject) => {
        https.get(OW_ENDPOINT, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

module.exports = {
    requestData,
}

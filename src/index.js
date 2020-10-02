const { requestData } = require('./request-data');
const { saveData } = require('./save-data');

async function run() {
    const data = await requestData();
    
    saveData(data);
}

module.exports = {
    run,
}

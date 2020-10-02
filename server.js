const { CronJob } = require('cron');
const { run } = require('./src');

const job = new CronJob('0 */10 * * * *', run, null, true);

job.start();

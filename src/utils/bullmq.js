const { Queue, Worker } = require('bullmq');
const { processEmails } = require('../services/emailService');

const connection = { connection: { host: process.env.REDIS_URL } };
const emailQueue = new Queue('emailQueue', connection);

const initializeBullMQ = () => {
  new Worker('emailQueue', async (job) => {
    await processEmails(job.data);
  }, connection);
};

module.exports = { initializeBullMQ, emailQueue };

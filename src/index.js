require('dotenv').config();
const express = require('express');
const { initializeBullMQ } = require('./utils/bullmq');
const { setupGmailOAuth, setupOutlookOAuth } = require('./services/authService');
const { receiveEmailHandler } = require('./controllers/emailController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize BullMQ
initializeBullMQ();

// OAuth routes
app.get('/auth/gmail', setupGmailOAuth);
app.get('/auth/outlook', setupOutlookOAuth);

// Route to handle incoming emails
app.post('/receive-email', receiveEmailHandler);

app.listen(port, () => {
  console.log(`Email automation tool listening at http://localhost:${port}`);
});

# Email Automation App

## Project Description
WORK IN PROGRESS. NOT WORKING RIGHT NOW

This project is an email automation tool that integrates with Gmail and Outlook to handle incoming emails and process them using OpenAI. It uses BullMQ for job processing and Redis for job queue management.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Apoorv0503/Email-automation-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Email-automation-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

Set up the environment variables in `src/.env`:
```
GMAIL_CLIENT_ID=your_gmail_client_id
GMAIL_CLIENT_SECRET=your_gmail_client_secret
GMAIL_REDIRECT_URI=your_gmail_redirect_uri
OUTLOOK_CLIENT_ID=your_outlook_client_id
OUTLOOK_CLIENT_SECRET=your_outlook_client_secret
OUTLOOK_REDIRECT_URI=your_outlook_redirect_uri
OPENAI_API_KEY=your_openai_api_key
REDIS_URL=your_redis_url
PORT=3000
```

## Usage

Run the application:
```bash
node src/index.js
```

## Technologies Used

- @microsoft/microsoft-graph-client
- axios
- bullmq
- dotenv
- express
- googleapis
- openai

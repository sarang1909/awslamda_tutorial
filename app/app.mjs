const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/hello', (req, res) => res.send('Hello World'));

app.listen(3000, () => console.log('Server is running on port 3000'));

module.exports.handler = serverless(http);

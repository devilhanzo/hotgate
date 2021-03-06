// server/app.js
const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
  });

module.exports = app;
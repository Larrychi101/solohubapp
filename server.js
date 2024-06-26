const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/onboarding', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'onboarding.html'));
});

app.listen(process.env.PORT || 8080);
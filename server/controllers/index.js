const express = require('express');
const ukNews = require('./ukNews');

const app = express();
app.use('/uk-news', ukNews);

module.exports = app;
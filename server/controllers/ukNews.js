const express = require('express');
const ukNews = require('../models/ukNews');

const app = express();

app.get('/:keyword', getKeywordSearch);
app.get('/', getUKNews);

function getUKNews(req, res) {
    ukNews.getUKNews()
        .then(result => {
            res.status(result.status).send(result.data);
        })
        .catch(e => res.status(500).send('Something went wrong', e))
}

function getKeywordSearch(req, res) {
    const { keyword } = req.params;

    if (!keyword) {
        return res.status(400).send('keyword is required!')
    }
    ukNews.getKeywordSearch(keyword)
        .then(result => {
            res.status(result.status).send(result.data);
        })
        .catch(e => res.status(500).send('Something went wrong', e))
}

module.exports = app;
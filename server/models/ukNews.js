const axios = require('axios');
const apiKey = process.env['API_KEY'];

exports.getUKNews = () => {
    if (!apiKey) {
        throw 'API key did not set!';
    }
    return axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-08-06&sortBy=publishedAt&apiKey=${apiKey}`)
      .then(response => {
            return response;
      })
      .catch(error => {
            console.error('[getUKNews] error: ', error);    // you can use loggers here
            return error;
      });
}

exports.getKeywordSearch = (keyword) => {
    if (!apiKey) {
        throw 'API key did not set!';
    }
    return axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`)
      .then(response => {
            return response;
      })
      .catch(error => {
            console.error('[getKeywordSearch] error: ', error);    // you can use loggers here
            return error;
      });
}
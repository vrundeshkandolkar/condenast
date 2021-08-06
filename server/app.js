const express = require('express');
const middleware = require('./middleware');
const controllers = require('./controllers');
const app = express();
const port = 8080;

app.use(middleware.cors);
app.use('/api', middleware.ensureAuthenticated, controllers);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
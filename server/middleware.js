exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
    if (process.env.STAGE === 'LOCAL') {
        next();
    }
    // set authentication strategy for any other environment then LOCAL
    /* else if (isAuthenticated()) {
        next();
    } */
};

exports.cors = function cors(req, res, next) {
    if (process.env.STAGE === 'LOCAL') {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    } else {
        // res.setHeader('Access-Control-Allow-Origin', '');    set you origin here
    }
    res.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.set('Access-Control-Allow-Credentials', true);
    next();
}


const init = function () {

    return {
        express: require('express'),
        cookieParser: require('cookie-parser'),
        compress: require('compression'),
        bodyParser: require('body-parser'),
        path: require('path'),
        expressValidator: require('express-validator'),
        connectAssets: require('connect-assets'),
        port: process.env.PORT || 8080,
        http: require('http')
    };
};

module.exports = init();
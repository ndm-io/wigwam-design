const Timer = require('../utils/Timer');

const initRouteHandler = function (server) {

    server.app.get('/api/message', function (req, res, next) {
        const renderTimer = Timer();

        const response = {status:"OK", message: "Message end point hit"};

        console.log('Api request time: %s : %d', req.url, renderTimer.end());

        res.send(response);
    });

    return server;

};

module.exports = initRouteHandler;
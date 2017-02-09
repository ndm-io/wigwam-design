const controllers = require('./controllers');
const execute = function (handler, req, res, next) {
    return function (req, res, next) {
        handler(req, res, next);
        console.log("Api request: %s", req.url);
    };
};

const initRouteHandler = function (server) {

    for (let i = 0, len = controllers.length; i < len; i++) {
        const controller = controllers[i];
        server.app[controller.method](controller.route, execute(controller.handler));
    }

    return server;
};

module.exports = initRouteHandler;
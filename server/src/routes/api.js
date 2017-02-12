const controllers = require('./controllers');
const wrap = function (handler) {

    return function (req, res, next) {
        handler(req, res, next);

        const log = `${new Date().toISOString()},API,${req.url}`;

        console.log(log);
    };

};

const initRouteHandler = function (server) {

    for (let i = 0, len = controllers.length; i < len; i++) {

        const controller = controllers[i];

        const dependencies = controller.dependencies.reduce(function (acc, current) {
            return Object.assign({}, acc, {[current]: require(current)});
        }, {});

        server.app[controller.method](controller.route, wrap(controller.handler(dependencies)));
    }

    return server;
};

module.exports = initRouteHandler;
'use strict';

const match = require('react-router/lib/match');
const routes = require('../../../client/app/routes');

const matchedRouteHandler = require('./matchedRouteHandler');

const initRouteHandler = function (server) {

    server.app.get("*", function (req, res) {
        match({routes: routes, location: req.url}, matchedRouteHandler(req, res));
    });

    return server;

};

module.exports = initRouteHandler;

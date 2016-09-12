const path = require('path');

const render = require('./render'),
    routify = require('./routify'),
    metadata = require('./metadata'),
    Timer = require('../utils/Timer');

const metadataForUrl = function (url) {
    let opts = metadata[routify(url)];
    return opts || {};
};

const commonRouteHandler = function (req, res) {
    return function (err, redirect, props) {

        if (err) {
            //TODO: Error handling

            res.status(500);
            res.json({error: err});

        } else if (props) {

            const renderTimer = Timer();

            render(props, metadataForUrl(req.url), req.url)
                .then(function (html) {
                    console.log('Render time: %s : %d', req.url, renderTimer.end());
                    res.send(html);
                });

        }
    };
};

module.exports = commonRouteHandler;
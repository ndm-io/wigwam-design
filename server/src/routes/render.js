'use strict';

const React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    match = require('react-router/lib/match'),
    RouterContext = require('react-router/lib/RouterContext');

const Promise = require('promise'),
    fs = require('fs'),
    objectHash = require('object-hash'),
    path = require('path');

require(path.join(__dirname, '../../../client/app/core/StringSupplant'));

const cache = {};

const renderFile = function (filePath, params) {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.supplant(params);
};

const validateOpts = function (opts) {

    const validatedOpts = {};

    validatedOpts.params = opts.params || {title: "Wigwam Design"};
    validatedOpts.templates = (opts.templates) ? opts.templates : {header: 'header', footer: 'footer'};
    validatedOpts.initialState = opts.initialState || {};
    validatedOpts.path = opts.path || '../views/partials';
    validatedOpts.hash = objectHash.sha1({
        params: validatedOpts.params,
        templates: validatedOpts.templates,
    });

    return validatedOpts;
};


const render = function (props, opts, url) {
    return new Promise(function (resolve, reject) {

        opts = validateOpts(opts);

        if (!cache[opts.hash]) {
                if (props) {

                    const headerPath = path.join(__dirname, opts.path, opts.templates.header + '.html');
                    const footerPath = path.join(__dirname, opts.path, opts.templates.footer + '.html');

                    let markup = ReactDOMServer.renderToString(
                        <RouterContext router={props.router}
                                       location={props.location}
                                       routes={props.routes}
                                       params={props.params}
                                       components={props.components}
                                       createElement={props.createElement}/>
                    );

                    const header = renderFile(headerPath, opts.params);
                    const footer = renderFile(footerPath, opts.params);

                    cache[opts.hash] = header + markup + footer;
                    resolve(cache[opts.hash]);
                } else {
                    reject(new Error("No such route"));
                }

        } else {
            resolve(cache[opts.hash]);
        }
    });
};

module.exports = render;
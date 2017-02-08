const Promise = require('promise');
const routes = require('./routes');
const isBrowser = require('../core/is-browser');

require('whatwg-fetch');

function init(fetchObject) {

    let _fetch;
    if (fetchObject) {
        _fetch = fetchObject;
    } else if (isBrowser() && fetch) {
        _fetch = fetch;
    }

    const post = function (data, to) {
        return new Promise(function (resolve, reject) {

            if (!data) {
                reject({status: "error", message: "Not much point in sending nothing!"});
                return;
            }
            if (!to) {
                reject({status: "error", message: "Need an end point to send data to!"});
                return;
            }

            _fetch(to, {
                method: "post",
                body: data
            })
                .then(function (response) {
                    console.log(response);
                    resolve(response);
                })
                .catch(function (response) {
                    console.log(response);
                    reject(response);
                });

        });
    };

    return {
        routes: routes,
        post: post
    };
}

module.exports = init;
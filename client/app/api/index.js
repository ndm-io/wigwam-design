const Promise = require('promise');
const routes = require('./routes');

require('whatwg-fetch');

function init() {

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

            const object = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify( data )
            };

            fetch(to, object)
                .then(function (response) {

                    if (response.ok) {
                        resolve(response.json());
                    } else {
                        reject(response);
                    }

                })
                .catch(function (response) {
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
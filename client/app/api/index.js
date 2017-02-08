const Promise = require('promise');
const routes = require('./routes');

function init() {
    const post = function (data, to) {
        return new Promise(function (resolve, reject) {
            const response = {
                status: "ok",
                message: "Your message has been delivered and somebody will be in touch with you shortly"
            };
            resolve(response);
        });
    };

    return {
        routes: routes,
        post: post
    };
}

module.exports = init;
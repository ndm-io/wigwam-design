const Promise = require('promise');

const init = function(resolve, expectedResponse) {
    return function (url, opts) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (resolve) {
                    resolve(expectedResponse);
                } else {
                    reject(expectedResponse);
                }
            }, 500);

        });
    };
};

module.exports = init;
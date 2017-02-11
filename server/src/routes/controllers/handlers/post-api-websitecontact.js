const striptags = require('striptags');

const isEmail = require('../../../../../client/app/utils/is-email');

const MAX_DATA_LEN = 100,
    MAX_EMAIL_LEN = 254,
    MAX_MESSAGE_LEN = 200;

function init() {
    let obj = {};

    obj.method = 'post';
    obj.route = '/api/v1/send';

    obj.isEmail = isEmail;
    obj.dataFromBody = function (body) {
        const message = trim(striptags(body.message || ''), MAX_MESSAGE_LEN),
            name = trim(striptags(body.name || ''), MAX_DATA_LEN),
            email = trim(striptags(body.email || ''), MAX_EMAIL_LEN);

        return {name: name, email: email, message: message};
    };

    obj.trim = function (str, len) {
        return (str.length > len) ? str.substring(0, len - 3) + "..." : str.substring(0, len);
    };

    obj.checkData = function (data) {
        return (data.name.length > 0 && data.email.length > 0 && re.test(data.email));
    };

    obj.formatMessage = function (data) {

        if (!checkData(data)) return;

        return [
            'New Msg: ',
            data.name,
            '\n',
            data.email,
            '\n',
            data.message
        ].join('');
    };

    obj.handler = function (req, res, next) {
        const response = {status: "OK", message: "API endpoint hit", url: req.url, time: new Date()};
        setTimeout(function () {
            res.send(response);
        }, 30);

    };

    return obj;
}

module.exports = init();
const Promise = require('promise');
const keys = require('lodash/keys');

const isEmail = require('../../../../../../client/app/utils/is-email');

function init() {
    let obj = {};

    obj.isEmail = isEmail;

    obj.trim = function (str, len) {
        if (!str) { return ''; }
        return (str.length > len) ? str.substring(0, len - 3) + "..." : str.substring(0, len);
    };

    obj.tagsRe = /<[^>]*>/g;

    obj.isPlainString = function (str) {
        return !obj.tagsRe.test(str);
    };

    obj.trimmedData = function (body) {
        return {
            name: obj.trim(body.name) || '',
            email: body.email || '',
            message: obj.trim(body.message) || ''
        };
    };

    obj.formattedMessageFrom = function (body) {
        return new Promise(function (resolve, reject) {

            let result = {};
            const trimmedData = obj.trimmedData(body);

            const name = trimmedData.name;
            if (name.length > 0 && obj.isPlainString(name)) {
                result.name = name;
            }

            const email = trimmedData.email;
            if (obj.isEmail(email)) {
                result.email = email;
            }

            const message = trimmedData.message;
            if (message.length > 1 && obj.isPlainString(message)) {
                result.message = message;
            }

            if (keys(result).length === 3) {

                const message = `New Msg: ${result.name}\nEmail: ${result.email}\nMsg: ${result.message}`;
                resolve(message);

            } else {
                reject(new Error("The supplied message was invalid"));
            }

        });

    };

    obj.twilioMessageFrom = function (message) {
        return {
            to: process.env.TWILIO_NOTIFY_DEFAULT,
            from: process.env.TWILIO_NUMBER_CONTACT,
            body: message
        };
    };

    return obj;
}

module.exports = init();
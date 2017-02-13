const hasDependencies = require('../methods/has-dependencies');
const methods = require('../methods/post-api-websitecontact');

function init() {
    let obj = {};

    obj.method = 'post';
    obj.route = '/api/v1/send';

    obj.dependencies = [
        'twilio'
    ];

    obj.handler = function (dependencies) {

        if (!hasDependencies(obj.dependencies, dependencies)) {
            throw new Error("Missing dependencies");
        }

        const client = new dependencies.twilio.RestClient();

        return function (req, res, next) {

            methods.formattedMessageFrom(req.body)
                .then(function (message) {
                    return client.messages.create(message);
                })
                .then(function (message) {
                    res.send({message: "Your message has been successfully sent, somebody will be in touch shortly."});
                })
                .catch(function (error) {
                    res.sendStatus(500);
                    res.send({message: "Oh dear, Your message could not be sent.", error: error});
                });

        }
    };

    return obj;
}

module.exports = init();
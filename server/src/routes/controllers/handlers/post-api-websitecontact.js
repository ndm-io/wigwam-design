
const methods = require('../methods/post-api-websitecontact');

function init() {
    let obj = {};

    obj.method = 'post';
    obj.route = '/api/v1/send';

    obj.handler = function (req, res, next) {

        methods.formattedMessageFrom(req.body)
            .then(function (obj) {
                res.send({status:"ok", message: "Your message has been successfully sent"});
            })
            .catch(function (error) {
                res.send({status: "error", message: "Oh dear, Your message could not be sent."})
            });

    };

    return obj;
}

module.exports = init();
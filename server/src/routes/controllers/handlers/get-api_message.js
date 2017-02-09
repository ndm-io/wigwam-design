module.exports = {

    method: 'get',
    route: '/api/v1/message',

    handler: function (req, res, next) {
        const response = {status: "OK", message: "API endpoint hit", url: req.url, time: new Date()};
        setTimeout(function () {
            res.send(response);
        }, 30);

    }
};
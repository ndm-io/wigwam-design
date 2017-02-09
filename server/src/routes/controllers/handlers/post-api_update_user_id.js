module.exports = {

    method: 'post',
    route: '/api/v1/update/user/:id',

    handler: function (req, res, next) {
        setTimeout(function () {
            const response = {
                status: "ok",
                message: "User updated",
                user: req.params.id,
                url: req.url,
                time: new Date()
            };
            res.send(response);
        }, 100);
    }
};
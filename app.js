const Server = require('./server');


Server.init()
    .then(Server.initMainRoutes)
    .then(Server.initApiRoutes)
    .then(Server.start)
    .then(function (server) {
        console.log('server started on %d in %s mode', server.port, server.mode);
    })
    .catch(function (error) {
        console.log('Error with init', error);
    });



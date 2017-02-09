require("babel-register")({
    presets: ["es2015", "react"],
});

const Promise = require('promise');

const dependencies = require('./dependencies');

const init = function () {

    return new Promise(function (resolve) {

        const app = dependencies.express(),
            path = dependencies.path;

        app.set('port', dependencies.port);
        // app.set('views', path.join(__dirname, 'src/views'));
        // app.set('view engine', 'pug');
        app.use(dependencies.compress());
        app.use(dependencies.connectAssets({
            paths: [
                path.join(__dirname, '../public/assets'),
                path.join(__dirname, '../public/css'),
                path.join(__dirname, '../public/js'),
                path.join(__dirname, '../public/html')
            ],
            helperContext: app.locals
        }));
//app.use(logger('dev'));
        app.use(dependencies.bodyParser.json());
        app.use(dependencies.bodyParser.urlencoded({extended: true}));
        app.use(dependencies.expressValidator());
        app.use(dependencies.cookieParser());

        app.use(dependencies.express.static(path.join(__dirname, '../public'), {maxAge: 31557600000}));

        resolve({
            app: app,
            http: dependencies.http.Server(app),
            port: app.get('port'),
            mode: process.env.mode || 'dev'
        });

    });
};

const mod = function (server, module) {
    return require(dependencies.path.join(__dirname, module))(server);
};

const initMainRoutes = function (server) {
    return mod(server, './src/routes/main');
};

const initApiRoutes = function (server) {
    return mod(server, "./src/routes/api");
};

const initErrorRoutes = function (server) {

    server.app.use(function (req, res) {
        res.sendStatus(404);
    });

    server.app.use(function (req, res) {
        res.sendStatus(500);
    });

    return server;
};

const start = function (server) {
    server.http.listen(server.port);
    return server;
};


module.exports = {
    init: init,
    initMainRoutes: initMainRoutes,
    initApiRoutes: initApiRoutes,
    initErrorRoutes: initErrorRoutes,
    start: start
};

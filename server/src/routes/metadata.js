const path = require('path'),
    zipObject = require('lodash.zipobject');

const fs = require('fs'),
    routify = require('./routify');

const pagesPath = path.join(__dirname, '../../../client/app/pages');

const jsFilter = function (file) {
    return fs.statSync(path.join(pagesPath, file)).isDirectory();
};

const metaMap = function (file) {
    return require(path.join(pagesPath, file)).metadata;
};

const meta = function () {
    const data = fs.readdirSync(pagesPath)
        .filter(jsFilter)
        .map(metaMap);

    const routes = data.map(function (item) {
        return item.route;
    });

    return zipObject(routes, data);

};


module.exports = meta();
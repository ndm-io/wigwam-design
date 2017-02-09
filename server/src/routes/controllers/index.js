const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, './handlers/');

const controllers = fs.readdirSync(dir)
    .map(function (filename) {
        return './handlers/' + filename;
    })
    .map(function (filepath) {
        return require(filepath);
    });

module.exports = controllers;
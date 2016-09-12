const removeExt = require('./removeExt');

module.exports = function (file) {
    file = removeExt(file);
    const route = (file === 'home') ? '/' : file;
    return (route[0] === '/') ? route : "/" + route;
};
const re = /\.[^/.]+$/;

module.exports = function (filename) {
    return filename.replace(re, '');
};
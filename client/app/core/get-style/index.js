const React = require('react');

const isBrowser = require('../is-browser');

const getStyle = function (ref) {
    if (!isBrowser()) { return {} }

    return window.getComputedStyle(ref);
};

module.exports = getStyle;
const isBrowser = require('../is-browser'),
    _ = require('lodash');

const WheelEvent = function () {

    const globalObject = (isBrowser()) ? window : global;

    if (!globalObject.wheelEventObservers) {
        globalObject.wheelEventObservers = {};
    }

    return {
        postWheelEvent: function (event) {
            _.values(globalObject.wheelEventObservers).forEach(function (func) {
                func(event);
            })
        },

        registerObserver: function (key, func) {
            globalObject.wheelEventObservers[key] = func;
        },

        removeObserver: function (key) {
            delete globalObject.wheelEventObservers[key];
        }
    };
};

module.exports = WheelEvent();
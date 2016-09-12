const isBrowser = require('../is-browser');

const getState = function () {
    return {
        app: "Wigwam Design"
    };
};

const initState = function () {

    const globalObject = (isBrowser()) ? window : global;

    if (!globalObject.appState) globalObject.appState = getState();

    return globalObject.appState;
};

const appState = initState();

module.exports = appState;
const React = require('react'),
    ReactDOM = require('react-dom');

const Router = require('react-router/lib/Router'),
    memoryHistory = require('react-router/lib/createMemoryHistory')();

const routes = require('./routes'),
    isBrowser = require('./core/is-browser');


if (isBrowser()) {
    const container = document.getElementById('root');

    const update = function () {
        window.scrollTo(0,0);
    };

    if (container) {
        memoryHistory.push(window.location.pathname);
        ReactDOM.render(<Router routes={routes} history={memoryHistory} onUpdate={update}/>, container);
    }
}






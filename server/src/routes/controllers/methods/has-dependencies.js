const _ = require('lodash');

const hasDependencies = function (dependencyList = [], dependencies = {}) {

    return !_(dependencyList)
        .map(function (dependencyName) {
            return !!(dependencies[dependencyName]);
        })
        .includes(false);

};

module.exports = hasDependencies;
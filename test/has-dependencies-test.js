const expect = require('chai').expect;

const hasDependencies = require('../server/src/routes/controllers/methods/has-dependencies');

describe('has-dependencies', function () {

    it('spots missing dependencies', function () {
        const dependencyList = [
            'twilio',
            'regex'
        ];

        const dependencies = {
            twilio: {}
        };

        expect(hasDependencies(dependencyList, dependencies)).to.equal(false);
    });

    it('handles empty dependency array', function () {
        const dependencyList = [];
        const dependencies = undefined;

        expect(hasDependencies(dependencyList, dependencies)).to.equal(true);
    });

    it('handles undefined dependencies', function () {
        const dependencyList = undefined;
        const dependencies = undefined;

        expect(hasDependencies(dependencyList, dependencies)).to.equal(true);
    });

    it('returns true with correct dependencies', function () {
        const dependencyList = [
            'twilio',
            'regex'
        ];

        const dependencies = {
            twilio: {},
            regex: {}
        };

        expect(hasDependencies(dependencyList, dependencies)).to.equal(true);
    });

});
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const expect = chai.expect;

const Api = require('../client/app/api');

describe('Client Api Model', function () {

    const validData = function () {
        return {
            name: "Terrence",
            email: "terrence@gmail.com",
            message: "A short message"
        };
    };

    describe('#post', function () {

        it('should reject missing to url', function() {

            const api = Api();
            const data = validData();
            const to = undefined;

            const result = api.post(data, to);
            return expect(result).to.be.rejected;

        });

    });
});
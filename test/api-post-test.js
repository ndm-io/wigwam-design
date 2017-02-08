const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const expect = chai.expect;

const Api = require('../client/app/api');
const Fetch = require('./mock-fetch');

describe('Client Api Model', function () {

    const validData = function () {
        return {
            name: "Terrence",
            email: "terrence@gmail.com",
            message: "A short message"
        };
    };

    describe('#post', function () {

        it('should reject missing data', function () {

            const mockFetch = Fetch(false, {status: "error", message: "Sadly it appear corrupt data got in"});
            const api = Api(mockFetch);
            const data = undefined;
            const to = '/valid';

            return expect(api.post(data, to)).to.be.rejected;

        });

        it('should reject missing url', function () {

            const mockFetch = Fetch(false, {status: "error", message: "Sadly it appear corrupt data got in"});
            const api = Api(mockFetch);
            const data = validData();
            const to = undefined;

            return expect(api.post(data, to)).to.be.rejected;

        });

        it('should reject on undefined url undefined data object', function () {

            const mockFetch = Fetch(false, {status: "error", message: "Sadly it appear corrupt data got in"});
            const api = Api(mockFetch);
            const data = undefined;
            const to = undefined;

            return expect(api.post(data, to)).to.be.rejected;
        });

        it('should eventually return status and message properties', function () {

            const mockFetch = Fetch(true, {status: "ok", message: "This message was sent correctly"});
            const api = Api(mockFetch);
            const data = validData();
            const to = '/message';

            return expect(api.post(data, to)).to.eventually.have.all.keys('status', 'message');

        });

    });
});
const expect = require('chai').expect;
const controller = require('../server/src/routes/controllers/handlers/post-api-websitecontact');

const mostReq = function (url) {
    return {
        url: url
    };
};

const mockRes = {
    send: function (response) {
        return response
    }
};

describe('Server: Website Contact Controller', function () {

    describe('correctly exports data and handler function', function () {

        it('has route, method and handler keys', function () {

            expect(controller).to.have.any.keys('route', 'method', 'handler');

        });

        it('has a handler functions', function () {

            expect(controller.handler).to.be.a('function');

        });

        it('has a route which begins with /api', function () {

            expect(controller.route.substring(0, 4)).to.equal('/api');

        });
    });

    describe('#isEmail', function () {

        it('has email regex for invalid emails', function () {

            const emails = [
                "name.name",
                "nnnnnnnnn",
                "",
                undefined,
                "@design",
                "@design.com.au"
            ];

            emails.forEach(function (email) {
                expect(controller.isEmail(email)).to.equal(false);
            });


        });

        it('has email regex for valid emails', function () {

            const emails = [
                "name@gmail.com",
                "name.name@gmail.com",
                "name.name@gmail.co.uk",
                "longname.dd@longdomain.com.au"
            ];

            emails.forEach(function (email) {
                expect(controller.isEmail(email)).to.equal(true);
            });

        });

    });

    describe('#dataFromBody', function () {


        it('strips tags from name property', function () {
            expect(true).to.equal(false);
        });

        it('strips tags from email property', function () {
            expect(true).to.equal(false);
        });

        it('strips tags from message property', function () {
            expect(true).to.equal(false);
        });

    });

    describe('#trim', function () {


        it('trims a message to 200 chars', function () {
            expect(true).to.equal(false);
        });

        it('trims name to 100 chars', function () {
            expect(true).to.equal(false);
        });

        it('trims email to 254 chars', function () {
            expect(true).to.equal(false);
        });

    });

    describe('#checkData', function () {


        it('ensures name is longer than 0', function () {
            expect(true).to.equal(false);
        });

        it('ensures email is longer than 0', function () {
            expect(true).to.equal(false);
        });

    });

    describe('#formatMessage', function () {


        it('does not attempt to format an incorrectly formed message', function () {
            expect(true).to.equal(false);
        });

    });


});
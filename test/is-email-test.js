const expect = require('chai').expect;

const isEmail = require('../client/app/utils/is-email');

describe('is-email', function () {

    describe('isEmail', function () {

        it('handles undefined', function () {
            const test = undefined;
            expect(isEmail(test)).to.equal(false);
        });

        it('handles null', function () {
            const test = null;
            expect(isEmail(test)).to.equal(false);
        });

        it('handles an object', function () {
            const test = {
                key: "name",
                num: 0
            };
            expect(isEmail(test)).to.equal(false);
        });

        it('handles an array', function () {
            const test = [
                {key: "name"},
                {key: "test"}
            ];
            expect(isEmail(test)).to.equal(false);
        });

        const testEmails = function (emails, expectedResult) {
            emails
                .map(function (validEmail) {
                    return isEmail(validEmail);
                })
                .forEach(function (result) {
                    expect(result).to.equal(expectedResult);
                });
        };

        it('handles valid emails', function () {
            const emails = [
                "name.surname@domain.com",
                "singlename@domain.com",
                "name.surname@domain.co.nz",
                "name@domain.design"
            ];

            testEmails(emails, true);


        });

        it('handles invalid emails', function () {
            const emails = [
                "q",
                "name.name.name",
                "@domain",
                "@domain.com",
                "@domain.co.uk"
            ];

            testEmails(emails, false);

        });


    });

});
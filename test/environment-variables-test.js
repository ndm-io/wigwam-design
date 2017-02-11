const expect = require('chai').expect;

require('dotenv').load();

const envs = [
    "TWILIO_AUTH_TOKEN",
    "TWILIO_NUMBER_CONTACT",
    "TWILIO_NOTIFY_SAM",
    "TWILIO_ACCOUNT_SID",
    "TWILIO_NOTIFY_ROB",
    "TWILIO_NOTIFY_DEFAULT"
];

describe('Environment Variables', function () {

    envs.forEach(function (variable) {
        describe(variable, function() {
            it('isSet', function () {

                expect(process.env[variable]).to.be.a('string').with.length.gt(1);

            });
        });
    });

});
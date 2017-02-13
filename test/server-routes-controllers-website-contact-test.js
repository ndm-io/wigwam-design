const Promise = require('promise');
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const expect = chai.expect;

const controller = require('../server/src/routes/controllers/handlers/post-api-websitecontact');
const methods = require('../server/src/routes/controllers/methods/post-api-websitecontact');

const mockTwilioRequireOutput = function (checkFn, done) {
    return {
        RestClient: function () {
            return {
                messages: {
                    create: function (data) {
                        const result = checkFn(data);
                        return new Promise(function (resolve, reject) {
                            if (result) {
                                reject(result);
                            } else {
                                resolve();
                            }
                            done();
                        });

                    }
                }
            }
        }
    }
};

describe('Server: Website Contact Controller', function () {

    describe('correctly exports data and handler function', function () {

        it('has route, method and handler keys', function () {
            expect(controller).to.have.any.keys('route', 'method', 'handler', 'dependencies');

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
                expect(methods.isEmail(email)).to.equal(false);
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
                expect(methods.isEmail(email)).to.equal(true);
            });

        });

    });

    describe('#tagsRe', function() {

       it('matches script tags', function () {
            const candidate = "Rob<script>console.log(document)</script>";
            expect(methods.tagsRe.test(candidate)).to.equal(true);
       });

       it('does not match an email address', function () {
            const candidate = "name@domain.name";
            expect(methods.tagsRe.test(candidate)).to.equal(false);
       });

       it('does not match against undefined', function () {
           expect(methods.tagsRe.test(undefined)).to.equal(false);
       });

    });

    function stringOfLength(len) {
        const s = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return new Array(len)
            .join()
            .split(',')
            .map(function() {
                return s.charAt(Math.floor(Math.random() * s.length));
            })
            .join('');
    }

    describe('#trim', function () {

        it('trims a larger message to 200 chars', function () {

            const candidate = stringOfLength(250);

            return expect(methods.trim(candidate, 200))
                .to
                .be
                .a('string')
                .with
                .lengthOf(200);

        });

        it('returns a short message as is', function () {

            const candidate = "This is a valid string";

            return expect(methods.trim(candidate, 200))
                .to
                .equal(candidate);

        });

        it('returns a string with undefined input', function () {

            const candidate = undefined;

            return expect(methods.trim(candidate, 200))
                .to
                .equal('');

        });


    });

    describe('#isPlainString', function () {

        it('rejects tagged strings', function () {
            const candidate = "This string <script>document.getElementById('root')</script> is invalid";
            return expect(methods.isPlainString(candidate))
                .to
                .equal(false);
        });

        it('resolves valid strings', function () {
            const candidate = "This string is valid";
            return expect(methods.isPlainString(candidate))
                .to
                .equal(true);
        });

    });
    
    describe('#formattedMessageFromFrom', function () {

        it('rejects missing invalid name', function () {

            const body = {
                name: undefined,
                email: 'name@domain.com',
                message: 'This is a valid message'
            };

            return expect(methods.formattedMessageFrom(body))
                .to
                .eventually
                .be
                .rejected
        });

        it('rejects invalid name', function () {

            const body = {
                name: "<script>document.getElementById('root');</script>",
                email: 'name@domain.name',
                message: 'This is a valid message'
            };

            return expect(methods.formattedMessageFrom(body))
                .to
                .eventually
                .be
                .rejected
        });

        it('rejects invalid email', function () {

            const body = {
                name: 'Rob',
                email: 'name.name',
                message: 'This is a valid message'
            };

            return expect(methods.formattedMessageFrom(body))
                .to
                .eventually
                .be
                .rejected
        });

        it('rejects missing email', function () {

            const body = {
                name: 'Name',
                email: undefined,
                message: 'This is a valid message'
            };

            return expect(methods.formattedMessageFrom(body))
                .to
                .eventually
                .be
                .rejected
        });

        it('rejects invalid message', function () {

            const body = {
                name: 'Name',
                email: 'name@domain.com',
                message: "<script>document.getElementById('root');</script>"
            };

            return expect(methods.formattedMessageFrom(body))
                .to
                .eventually
                .be
                .rejected
        });

        it('rejects undefined message', function () {

            const body = {
                name: 'Name',
                email: 'name@domain.com',
                message: undefined
            };

            return expect(methods.formattedMessageFrom(body))
                .to
                .eventually
                .be
                .rejected
        });

        it('rejects empty message', function () {

            const body = {
                name: '',
                email: '',
                message: ''
            };

            return expect(methods.formattedMessageFrom(body))
                .to
                .eventually
                .be
                .rejected
        });

        it('resolves to formatted message', function () {
            const body = {
                name: 'Rob',
                email: 'name@domain.com',
                message: 'Short message'
            };

            const expectedResult = `New Msg: ${body.name}\nEmail: ${body.email}\nMsg: ${body.message}`;

            return expect(methods.formattedMessageFrom(body))
                .to
                .eventually
                .equal(expectedResult);
        });

    });

    describe('Api handler', function () {

        const req = {
            body: {
                name: 'Name',
                email: 'name@domain.com',
                message: "This is a short valid message"
            }
        };

        const compareResult = function (expected, result) {
            return result.email === expected.email && result.message === expected.message;
        };

        const generateRes = function (expectedResult, done) {
            return {
                send: function (response) {
                    if (compareResult(response, expectedResult)) {
                        if (done) { done(); }
                    } else {
                        const result = "res.send(" + JSON.stringify(response) + ")";
                        if  (done) {
                            done(new Error(result));
                        } else {
                            throw new Error(result);
                        }
                    }

                }
            };
        };


        const errorResult = {status: "error", message: "Oh dear, Your message could not be sent."},
            successResult = {status:"ok", message: "Your message has been successfully sent"};

        it('sends response to client on invalid data', function (done) {

            const res = generateRes(errorResult, done);

            const mock = mockTwilioRequireOutput(function(data) {
                return;
            });

            controller.handler({twilio: mock})({body: undefined}, res);

        });

        it('sends response to client on valid data', function (done) {

            const res = generateRes(successResult, done);
            const mock = mockTwilioRequireOutput(function(data) {
                return;
            });

            controller.handler({twilio: mock})(req, res);

        });

        it('twilio message valid keys', function () {
            const message = "This is a short message";
            const result = methods.twilioMessageFrom(message);

            expect(result).to.have.all.keys('to', 'from', 'body');

        });

        it('has valid to phone number', function () {
            const message = "This is a short message";
            const result = methods.twilioMessageFrom(message);

            expect(result.to).to.equal(process.env.TWILIO_NOTIFY_DEFAULT);
        });

        it('has valid from phone number', function () {
            const message = "This is a short message";
            const result = methods.twilioMessageFrom(message);

            expect(result.from).to.equal(process.env.TWILIO_NUMBER_CONTACT);
        });

        it('has valid message', function () {
            const message = "This is a short message";
            const result = methods.twilioMessageFrom(message);
            expect(result.body).to.equal(message);
        });

        it('correctly forms a twilio object', function(done) {

            const mock = mockTwilioRequireOutput(function (data) {
                if (typeof data === 'string') {
                    return;
                } else {
                    return new Error("Twilio object not correctly formed");
                }

            }, done);

            const res = generateRes(errorResult);

            controller.handler({twilio: mock})(req, res);

        });


    });


});
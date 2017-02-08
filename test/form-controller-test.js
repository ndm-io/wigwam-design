const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const expect = chai.expect;

const Promise = require('promise');

const Form = require('../client/app/pages/contact/form/form');

function invalidState() {
    return {
        name: "so",
        email: "notavalidemail",
        message: "",
        errors: {},
        response: undefined,
        responseError: undefined
    };
}

function validState() {
    return {
        name: "Rob",
        email: "aname@gmail.com",
        message: "This is a suitable message",
        errors: {},
        response: undefined,
        responseError: undefined
    };
}

describe('Form Controller', function() {

    describe('#errorsFrom', function () {

        it('obtains errors from component state', function () {

            const form = Form();
            const state = invalidState();

            const errors = form.errorsFrom(state);

            expect(Object.keys(errors).length).to.be.above(2);

        });

        it('correctly identifies a valid state', function () {

            const form = Form();
            const state = validState();

            const errors = form.errorsFrom(state);

            expect(Object.keys(errors).length).to.equal(0);


        });

        it('identifies an invalid email address', function () {

            const form = Form();
            const invalidEmail = "rob.rob.com";

            expect(form.isEmail(invalidEmail)).to.equal(false);

        });

        it('handles undefined values', function () {
            const form = Form();
            const invalidEmail = undefined;

            expect(form.isEmail(invalidEmail)).to.equal(false);
        });


    });

    describe('#hasErrors', function () {

        it('identifies an object without errors', function () {
            const form = Form();
            const errors = {};

            expect(form.hasErrors(errors)).to.equal(false);
        });

        it('identifies an object with one error', function () {
            const form = Form();
            const errors = {
                email: "This email address does not appear valid"
            };

            expect(form.hasErrors(errors)).to.equal(true);
        });

        it('handles an undefined object', function () {
            const form = Form();
            const errors = undefined;

            expect(form.hasErrors(errors)).to.equal(false);
        });

    });

    describe('#dataFrom', function () {

        it('returns an object with correct name, email and message and no other keys', function () {
            const form = Form();
            const state = {
                name: "Rob",
                email: "aname@gmail.com",
                message: "A suitable message for sending to a web server",
                errors: {
                    email: "This email address does not appear valid"
                },
                response: undefined,
                responseError: undefined
            };

            const data = form.dataFrom(state);

            expect(data.name).to.equal(state.name);
            expect(data.email).to.equal(state.email);
            expect(data.message).to.equal(state.message);

            expect(Object.keys(data).length).to.equal(3);

        });

        it('handles an undefined object', function () {
            const form = Form();
            const state = undefined;

            const data = form.dataFrom(state);

            expect(data.name).to.equal("");
            expect(data.email).to.equal("");
            expect(data.message).to.equal("");
        });

        it('handles an object without the expected keys', function () {
            const form = Form();
            const state = {
                key: "unknown"
            };

            const data = form.dataFrom(state);

            expect(data.name).to.equal("");
            expect(data.email).to.equal("");
            expect(data.message).to.equal("");
        });

    });

    describe('#submit', function () {

       it('returns a promise', function () {

            const form = Form();

            return expect(form.submit()).be.fullfilled;

       });

    });

});
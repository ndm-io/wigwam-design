const React = require('react');

const isEmail = require('../../../utils/is-email');
const Api = require('../../../api');

const errorsFrom = function (data) {

    let errors = {};

    if (!isEmail(data.email)) {
        errors.email = "This email address does not appear valid"
    }
    if (data.name.length < 3) {
        errors.name = "This name is very short, it looks invalid"
    }
    if (data.message.length < 4) {
        errors.message = "If you want to talk to use we need more than that!"
    }

    return errors;
};

const hasErrors = function (errors) {
    return (errors) ? (Object.keys(errors).length > 0) : false;
};

const dataFrom = function (state) {

    const _state = (state) ? state : {};

    return {
        name: _state.name || "",
        email: _state.email || "",
        message: _state.message || ""
    };
};

const submit = function (api) {
    return function (data) {
        return api.post(data, api.routes.postContactFormData);
    };
};

function Form() {

    const api = Api();

    return {
        isEmail: isEmail,
        errorsFrom: errorsFrom,
        hasErrors: hasErrors,
        dataFrom: dataFrom,
        submit: submit(api)
    };
}

module.exports = Form;
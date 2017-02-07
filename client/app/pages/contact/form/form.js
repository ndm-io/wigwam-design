const Promise = require('promise');
const isEmail = require('../../../utils/is-email');

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
    return (Object.keys(errors).length > 0);
};

const dataFrom = function (state) {
    return {
        name: state.name,
        email: state.email,
        message: state.message
    };
};

const submit = function (data, toUrl) {
    return new Promise(function (resolve, reject) {
        reject("Oh dear this is embarrassing, an error has occured. Try social media or email perhaps?");
    });
};

function Form() {
    return {
        isEmail: isEmail,
        errorsFrom: errorsFrom,
        hasErrors: hasErrors,
        dataFrom: dataFrom,
        submit: submit
    };
}

module.exports = Form();
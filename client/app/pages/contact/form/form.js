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
    return (Object.keys(errors).length > 0);
};

const dataFrom = function (state) {
    return {
        name: state.name,
        email: state.email,
        message: state.message
    };
};

const submit = function (api) {
    return function (data) {
        return api.post(data, api.routes.postContactFormData);
    };
};

const renderForm = function (_this) {
    return (
        <form id="contact-form" role="form">

            <div className="form-group">
                <label className="sr-only" htmlFor="name">Name</label>
                <input type="text"
                       className="form-control"
                       name="name"
                       placeholder="Your Name*"
                       onChange={_this.handleChange}/>

                <p className="contact-validation-error">{_this.state.errors.name}</p>
            </div>

            <div className="form-group">
                <label className="sr-only" htmlFor="email">Your Email</label>
                <input type="email"
                       name="email"
                       className="form-control"
                       placeholder="Your E-mail*"
                       onChange={_this.handleChange}/>
                <p className="contact-validation-error">{_this.state.errors.email}</p>
            </div>

            <div className="form-group">
                <textarea className="form-control"
                          name="message"
                          rows="7"
                          placeholder="Message*"
                          onChange={_this.handleChange}/>
                <p className="contact-validation-error">{_this.state.errors.message}</p>
            </div>

            <div className="text-center">
                <button className="btn btn-block btn-round btn-d"
                        onClick={_this.submit}>
                    Submit
                </button>
            </div>

        </form>
    );
};

const renderResponse = function (response) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="module-subtitle font-serif">
                    {response}
                </div>
            </div>
        </div>
    );
};

const renderError = function () {
    return (
        <div className="row">
            <div className="col-md-12">
                <h2 className="module-title font-alt">Oops</h2>
                <div className="module-subtitle font-serif">
                    Oh dear. It appears there has been a problem when sending your message.<br/>
                    Maybe you could try another method?
                </div>
            </div>
        </div>
    );
};

function Form() {

    const api = Api();

    return {
        isEmail: isEmail,
        errorsFrom: errorsFrom,
        hasErrors: hasErrors,
        dataFrom: dataFrom,
        submit: submit(api),
        renderForm: renderForm,
        renderResponse: renderResponse,
        renderError: renderError
    };
}

module.exports = Form;
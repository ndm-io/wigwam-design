const React         = require('react');
const Form          = require('./form');
const FormRenderer  = require('./form-renderer');

function init() {

    const form = Form();
    const formRenderer = FormRenderer();

    return {

        getInitialState: function () {
            return {
                name: "",
                email: "",
                message: "",
                errors: {},
                response: undefined,
                responseError: undefined
            }
        },

        handleChange: function (event) {
            const fieldName = event.target.name,
                value = event.target.value;

            const newState = {[fieldName]: value};
            this.setState(newState);

        },

        submit: function (event) {
            event.preventDefault();

            const errors = form.errorsFrom(this.state);

            if (form.hasErrors(errors)) {
                this.setState({errors: errors});
                return;
            }

            this.setState({errors: {}});
            const that = this;

            form.submit(form.dataFrom(this.state))
                .then(function (response) {
                    that.setState({response: response.message});
                })
                .catch(function (response) {
                    that.setState({responseError: response.message});
                });


        },

        render: function () {
            let component;

            if(!this.state.response && !this.state.responseError) {
                component = formRenderer.renderForm(this);
            } else if (this.state.response) {
                component = formRenderer.renderResponse(this.state.response);
            } else if (this.state.responseError) {
                component = formRenderer.renderError();
            }

            return component;
        }
    };
}

module.exports = React.createClass(init());
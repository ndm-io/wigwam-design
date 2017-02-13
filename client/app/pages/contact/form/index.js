const React = require('react');
const Form = require('./form');
const FormRenderer = require('./form-renderer');

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
                response: '',
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
                .catch(function () {
                    that.setState({response: "Oh no, it looks like something went wrong, try another means of contact?"});
                });


        },

        render: function () {
            return formRenderer.renderForm(this);
        }
    };
}

module.exports = React.createClass(init());
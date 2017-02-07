const React = require('react');
const Form = require('./form');

function init() {

    return {

        getInitialState: function () {
            return {
                name: "",
                email: "",
                message: "",
                errors: {},
                response: "Oh dear this is embarrassing, an error has occured. Try social media or email perhaps?"
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

            const errors = Form.errorsFrom(this.state);

            if (Form.hasErrors(errors)) {
                this.setState({errors: errors});
                return;
            }

            this.setState({errors: {}});
            const data = Form.dataFrom(this.state);

            const that = this;

            Form.submit(data, "/message")
                .then(function (response) {
                    console.log("response", response);
                })
                .catch(function (reason) {
                    that.setState({response: reason});
                });


        },

        render: function () {
            let component;

            if(!this.state.response) {
                component = (
                    <form id="contact-form" role="form" onSubmit={this.submit}>

                        <div className="form-group">
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   placeholder="Your Name*"
                                   onChange={this.handleChange}/>

                            <p className="contact-validation-error">{this.state.errors.name}</p>
                        </div>

                        <div className="form-group">
                            <label className="sr-only" htmlFor="email">Your Email</label>
                            <input type="email"
                                   name="email"
                                   className="form-control"
                                   placeholder="Your E-mail*"
                                   onChange={this.handleChange}/>
                            <p className="contact-validation-error">{this.state.errors.email}</p>
                        </div>

                        <div className="form-group">
                        <textarea className="form-control"
                                  name="message"
                                  rows="7"
                                  placeholder="Message*"
                                  onChange={this.handleChange}/>
                            <p className="contact-validation-error">{this.state.errors.message}</p>
                        </div>

                        <div className="text-center">
                            <button className="btn btn-block btn-round btn-d"
                                    onClick={this.submit}>
                                Submit
                            </button>
                        </div>

                    </form>
                );
            } else {
                component = (
                    <div className="row">
                        <div className="col-12">
                            <h2 className="module-title font-alt">Ooops</h2>
                            <div className="module-subtitle font-serif">
                                {this.state.response}
                            </div>
                        </div>
                    </div>
                );
            }

            return component;
        }
    };
}

module.exports = React.createClass(init());
const React = require('react');

const init = function () {
    return {
        renderForm: function (_this) {
            return (
                <div>
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
                                    onClick={_this.submit}
                                    disabled={_this.state.response || _this.state.response.length > 0}>
                                Submit
                            </button>
                        </div>

                    </form>
                    <div style={{height: "30px"}}></div>
                    <div className="row">
                        <div className="col-md-12">
                            {_this.state.response}
                        </div>
                    </div>
                </div>
            );
        }
    };
};

module.exports = init;
const React = require('react');

function init() {
    return {

        propTypes: {
            testimonial: React.PropTypes.object
        },

        render: function () {

            let result;

            if (this.props.testimonial) {
                const testimonial = this.props.testimonial;

                result = (
                    <div className="testimonial col-md-8 col-md-offset-2 text-center">
                        <h5 className="module-icon m-b-20">
                            <i className="ion-ios-chatboxes-outline"/>
                        </h5>
                        <div className="font-serif m-b-20">
                            {testimonial.content}
                        </div>
                        <div className="quote-author font-alt">{testimonial.author}</div>
                    </div>
                );
            } else {
                result = (<div></div>);
            }

            return result;

        }
    };
}

module.exports = React.createClass(init());
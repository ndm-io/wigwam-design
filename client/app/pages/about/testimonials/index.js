const React = require('react');

const Testimonial = require('../testimonial');
const TransitionGroup = require('react-addons-css-transition-group');

const data = require('./data');
const REFRESH_INTERVAL = 4000;
const TRANSITION_INTERVAL = 500;

function init() {

    const mod = data.length;
    let update = true;

    return {

        getInitialState: function () {
            return {
                index: 0,
                testimonial: data[0],
                show: false
            }
        },

        update: function () {

            let interval;
            if (this.state.show) {
                interval = 500;
            } else {
                interval = REFRESH_INTERVAL;
            }

            setTimeout(function () {

                if (!update) { return }

                const index = (this.state.index + 1) % mod;
                const testimonial = (this.state.show) ? data[index] : undefined;
                this.setState({index: index, testimonial: testimonial, show: !this.state.show});
                this.update();


            }.bind(this), interval);

        },

        componentDidMount: function () {
            update = true;
            this.update();
        },

        componentWillUnmount: function () {
            update = false;
        },

        render: function () {

            const key = (this.state.testimonial) ? this.state.testimonial.author : "testimonial-empty";

            return (

                <div className="container">
                    <div className="row">

                        <TransitionGroup
                            transitionName="background"
                            transitionAppear={true}
                            transitionAppearTimeout={TRANSITION_INTERVAL}
                            transitionEnterTimeout={TRANSITION_INTERVAL}
                            transitionLeaveTimeout={TRANSITION_INTERVAL}>

                            <Testimonial key={key}
                                         testimonial={this.state.testimonial}/>


                        </TransitionGroup>

                    </div>
                </div>

            );
        }
    };
}

module.exports = React.createClass(init());
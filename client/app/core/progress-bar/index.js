const React = require('react');
const VisibilitySensor = require('react-visibility-sensor');


const init = function () {
    return {

        propTypes: {
            title: React.PropTypes.string.isRequired,
            value: React.PropTypes.number.isRequired
        },

        getInitialState: function () {
            return {
                fired: false,
                width: "0%"
            };
        },

        onChange: function (visible) {
            if (visible && !this.state.fired) {

                setTimeout(function () {
                    this.setState({
                        fired: true,
                        width: this.props.value + "%"
                    });
                }.bind(this), 500);

            }
        },

        render: function () {
            return (
                <VisibilitySensor onChange={this.onChange} active={!this.state.fired}>
                    <div>
                        <h6 className="progress-title font-alt">
                            {this.props.title}
                        </h6>
                        <div className="progress">
                            <div className="progress-bar pb-dark" style={{width: this.state.width}}/>
                        </div>
                    </div>
                </VisibilitySensor>
            );
        }
    }
};

module.exports = React.createClass(init());
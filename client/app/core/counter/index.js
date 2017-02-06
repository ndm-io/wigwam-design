const React = require('react');
const VisibilitySensor = require('react-visibility-sensor');
const isBrowser = require('../is-browser');

function init() {

    return {

        propTypes: {
            title: React.PropTypes.string.isRequired,
            suffix: React.PropTypes.string,
            to: React.PropTypes.number.isRequired,
            time: React.PropTypes.number.isRequired
        },

        getInitialState: function () {
            return {
                fired: false,
                computedNumber: 0,
                refreshInterval: 0
            };
        },

        update: function () {

            if (!isBrowser()) {
                this.setState({computedNumber: this.props.to});
                return;
            }

            if (this.state.computedNumber >= this.props.to) {
                this.setState({computedNumber: this.props.to});
                return;
            }

            setTimeout(function () {
                const nextNumber = this.state.computedNumber + 1;

                this.setState({computedNumber: nextNumber});
                this.update();

            }.bind(this), this.state.refreshInterval);
        },

        onChange: function (visible) {
            if (visible && !this.state.fired) {

                const timePerShow = this.props.time / this.props.to;

                this.setState({
                    fired: true,
                    refreshInterval: timePerShow
                });
                this.update();
            }
        },

        render: function () {
            const suffix = (this.props.suffix) ? this.props.suffix : "";
            return (
                <VisibilitySensor onChange={this.onChange} active={!this.state.fired}>
                    <div className="col-sm-3 m-b-md-20">
                        <div className="counter-item">
                            <div className="counter-title font-alt">
                                <h5 className="font-alt counter-number">
                                    {this.state.computedNumber}{suffix}<br/>
                                    {this.props.title}
                                </h5>
                            </div>
                        </div>
                    </div>
                </VisibilitySensor>
            );
        }
    };
}

module.exports = React.createClass(init());
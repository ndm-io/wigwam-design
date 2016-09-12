const React = require('react');

const init = function () {

    const heroStyle = {
        height: "100vh",
        width: "100%",
        background: "grey"
    };

    const contentStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh"
    };

    return {
        render: function () {
            return (
                <div style={heroStyle}>
                    <div className="container">
                        <div className="row" style={contentStyle}>
                            <div className="col-md-12 text-center">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
};

module.exports = React.createClass(init());
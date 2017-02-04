const React = require('react'),
    Link = require('react-router').Link;

const routes = require('../routes');

const init = function () {


    const overlayStyle = function (show) {
        return {
            visibility: (show) ? "visible" : "hidden",
            opacity: (show) ? "1" : "0"
        };
    };

    const li = routes.map(function (route) {
        return (<li key={route.route}><Link to={route.route} title={route.title}>{route.title}</Link></li>);
    });


    return {

        propTypes: {
            show: React.PropTypes.bool,
            onCloseRequest: React.PropTypes.func,
            onClick: React.PropTypes.func,
        },

        handleClose: function () {
            this.props.onCloseRequest();
        },

        handleLink: function () {
            this.props.onClick();
        },

        render: function () {

            return (
                <div id="overlay-menu" className="overlay-menu" style={overlayStyle(this.props.show)}>

                    <button className="navigation-hide" onClick={this.handleClose}>
                        <i className="ion-close-round"/>
                    </button>

                    <div className="overlay-menu-inner">
                        <nav className="overlay-menu-nav">
                            <ul id="nav">

                                {li}

                            </ul>
                        </nav>
                    </div>

                    <div className="overlay-navigation-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <p className="copyright font-alt m-b-0">© 2017 wigwam.design, All Rights
                                        Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
    };
};

module.exports = React.createClass(init());
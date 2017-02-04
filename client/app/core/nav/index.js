const React = require('react'),
    Link = require('react-router').Link;

const routes = require('./routes');
const OverlayMenu = require('./overlay-menu');

const init = function () {

    return {

        propTypes: {
            classes: React.PropTypes.string,
            logo: React.PropTypes.string
        },

        getInitialState: function () {
            return {
                showOverlay: false
            };
        },

        toggleOverlay: function () {
            this.setState({showOverlay: !this.state.showOverlay});
        },

        handleOverlayClick: function () {
            console.log('overlay clicked');
        },

        render: function () {

            const classes = "navbar navbar-fixed-top " + this.props.classes;

            const li = routes.map(function (route) {
                return (
                    <li key={route.route}>
                        <Link to={route.route} title={route.title}>
                            {route.title}
                        </Link>
                    </li>
                );
            });

            return (
                <div>
                    <OverlayMenu show={this.state.showOverlay} onCloseRequest={this.toggleOverlay}/>
                    <div className="navigation">

                        <nav className={classes}>

                            <div className="container">

                                <div className="navbar-header">
                                    <a className="navbar-brand" href="/">
                                        <img className="brand-logo"
                                             src={this.props.logo}
                                             width="95"
                                             alt=""/>
                                    </a>
                                </div>


                                <ul id="icons-navbar" className="nav navbar-nav navbar-right">
                                    <li>
                                        <div className="show-overlay navbar-button" title="Menu"
                                             onClick={this.toggleOverlay}>
                                            <span className="icon-bar"/>
                                            <span className="icon-bar"/>
                                            <span className="icon-bar"/>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="extra-navbar nav navbar-nav navbar-right">
                                    {li}
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            );
        }
    };
};

module.exports = React.createClass(init());


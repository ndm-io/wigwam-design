const React = require('react'),
    Link = require('react-router').Link;

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
            } ;
        },

        toggleOverlay: function () {
            console.log('toggle');
            this.setState({showOverlay: !this.state.showOverlay});
        },

        handleOverlayClick: function () {
            console.log('overlay clicked');
        },

        render: function () {

            const classes = "navbar navbar-fixed-top " + this.props.classes;

            return (
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
                                <a href="index.html#" id="toggle-menu" className="show-overlay" title="Menu">
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </a>
                            </li>
                        </ul>

                        <ul className="extra-navbar nav navbar-nav navbar-right">
                            <li>
                                <a href="/" title="Home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" title="About">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/shop" title="Shop">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="/contact" title="Contact">
                                    Contact
                                </a>
                            </li>
                        </ul>


                    </div>

                </nav>
            </div>
            );
        }
    };
};

module.exports = React.createClass(init());


const React = require('react'),
    Link = require('react-router').Link;

const routes = require('./routes');
const hasClass = require('../../core/has-class');
const isBrowser = require('../../core/is-browser');

const OverlayMenu = require('./overlay-menu');

const init = function () {

    const NAVBAR = "navbarTop";
    const NAVBAR_TRANSPARENT = "navbar-transparent";

    const navbarIsTransparent = function (element) {
        return hasClass(element, NAVBAR_TRANSPARENT);
    };

    /*
     componentDidMount: function () {



     //const navbar = this.refs[NAVBAR];
     document.documentElement.addEventListener('scroll', this.handleScroll);

     function navbarAnimation(navbar, moduleHero) {
     var topScroll = $(window).scrollTop();
     if (navbar.length > 0 && navbatTrans !== false) {
     if (topScroll >= 5) {
     navbar.removeClass('navbar-transparent');
     } else {
     navbar.addClass('navbar-transparent');
     }
     }
     }

     },
     */

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

                        <nav ref={NAVBAR} className={classes}>

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


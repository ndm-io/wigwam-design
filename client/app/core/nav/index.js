const React = require('react'),
    Link = require('react-router').Link;

const AppState = require('../app-state');

const init = function () {
    return {

        showOverlay: function () {
            console.log(AppState);
        },

        render: function () {
            return (
                <nav className="navbar navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">
                                <img src="/assets/images/svg/logo_wigwam_compact_white_100x35.svg" width="95"
                                     alt="Wigwam Logo"/>
                            </Link>
                        </div>

                        <button onClick={this.showOverlay}>

                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>

                        </button>

                        <ul className="extra-navbar nav navbar-nav navbar-right">
                            <li>
                                <Link to="/" title="Home">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" title="About">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" title="Contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }
    };
};

module.exports = React.createClass(init());


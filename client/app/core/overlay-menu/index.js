const React = require('react'),
    Link = require('react-router').Link;

const init = function () {
    return {
        render: function () {
            return (
                <div id="overlay-menu" className="overlay-menu">

                    <Link to="home" id="overlay-menu-hide" className="navigation-hide">
                        <i className="ion-close-round"/>
                    </Link>

                    <div className="overlay-menu-inner">
                        <nav className="overlay-menu-nav">
                            <ul id="nav">

                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>

                            </ul>
                        </nav>
                    </div>

                    <div className="overlay-navigation-footer">

                        <div className="container">

                            <div className="row">

                                <div className="col-sm-12 text-center">
                                    <p className="copyright font-alt m-b-0">© 2016 wigwam.design, All Rights Reserved.</p>
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
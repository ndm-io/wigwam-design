const React = require('react');
const Hero = require('../../core/hero');

const Nav = require('../../core/nav');

const initHomePage = function () {

    return {

        render: function () {

            return (
                <div>

                    <Nav classes="navbar-custom navbar-transparent"
                         logo="assets/images/svg/logo_wigwam_compact_white_100x35.svg"/>

                    <Hero backgroundUrl="assets/images/section-5.jpg"
                          heightPercent={100}
                          backgroundClasses="bg-dark-60">

                        <div className="hero-caption">
                            <div className="hero-text">

                                <h1 className="mh-line-size-1 font-alt m-b-50 text-white">WIGWAM DESIGN</h1>
                                <h5 className="mh-line-size-4 font-alt text-white">an interiors company</h5>

                            </div>
                        </div>

                    </Hero>

                    <section className="module">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <h2>Content</h2>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>


            );
        }
    };
};

module.exports = {
    metadata: {
        route: '/',
        params: {
            title: "Wigwam Design",
            keywords: "interior,design,studio,lancashire,shropshire,wales,residential,commercial,services",
            description: "Wigwam is a Lancashire based interior design studio specialising in residential projects for private individuals throughout the North West of England"
        },
        templates: {
            header: 'header',
            footer: 'footer'
        }
    },
    component: React.createClass(initHomePage())
};
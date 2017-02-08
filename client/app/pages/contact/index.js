const React = require('react');
const Nav = require('../../core/nav');
const Hero = require('../../core/hero');
const Form = require('./form');

const init = function () {
    return {
        render: function () {
            return (
                <div>
                    <Nav classes="navbar-custom navbar-light navbar-transparent"
                         logo="assets/images/svg/logo_wigwam_compact_100x35.svg"/>

                    <Hero backgroundUrl="assets/images/coffee.jpg"
                          heightPercent={50}
                          backgroundClasses="bg-light-30">

                        <div className="hero-caption">
                            <div className="hero-text">

                                <h1 className="mh-line-size-3 font-alt m-b-20">Contact Us</h1>
                                <h5 className="mh-line-size-4 font-alt">We love talking about design.</h5>

                            </div>
                        </div>

                    </Hero>

                    <section className="module">

                        <div className="container">

                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <h2 className="module-title font-alt">Get In Touch</h2>
                                    <div className="module-subtitle font-serif">
                                        Leave us a quick note and we will get back in touch,
                                        or just use your favourite social media account.
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-sm-6 col-sm-offset-1">

                                    <Form />

                                    <div style={{height: "30px"}}></div>

                                </div>

                                <div className="col-sm-4">


                                    <div className="alt-content-box m-t-0 m-t-sm-30">
                                        <div className="alt-content-box-icon">
                                            <i className="ion-paper-airplane"/>
                                        </div>
                                        <h5 className="alt-content-box-title font-alt">
                                            sam@wigwam.design
                                        </h5>

                                    </div>

                                    <div className="alt-content-box m-t-0 m-t-sm-30">
                                        <div className="alt-content-box-icon">
                                            <i className="ion-social-twitter-outline"/>
                                        </div>
                                        <h5 className="alt-content-box-title font-alt">
                                            @wigwamdesign
                                        </h5>
                                    </div>

                                    <div className="alt-content-box m-t-0 m-t-sm-30">
                                        <div className="alt-content-box-icon">
                                            <i className="ion-social-instagram-outline"/>
                                        </div>
                                        <h5 className="alt-content-box-title font-alt">
                                            @wigwam.design
                                        </h5>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </section>

                </div>
            )
        }
    };
};

module.exports = {
    metadata: {
        route: '/contact',
        params: {
            title: "Wigwam Design | Contact Us",
            keywords: "contact,interior,design,wigwam,lancashire,shropshire",
            description: "Contact us to find out more. You can send us a message here or just use your favourite social media"
        },
        templates: {
            header: 'header',
            footer: 'footer'
        }
    },
    component: React.createClass(init())
};
const React = require('react');

const Hero = require('../core/hero');

const initHomePage = function () {

    const heroTitleStyle = {
        letterSpacing: "50px",
        fontSize: "30px",
        fontWeight: "400",
        textTransform: "uppercase",
        fontFamily: "Dosis, open-sans"
    };

    const heroSubStyle = {
        letterSpacing: "10px",
        fontSize: "16px",
        fontWeight: "400",
        textTransform: "uppercase",
        fontFamily: "Dosis, open-sans"
    };


    return {
        render: function () {
            return (
                <div>
                    <Hero>
                        <h1 style={heroTitleStyle}>Wigwam Design</h1>
                        <h5 style={heroSubStyle}>An Interiors Company</h5>
                    </Hero>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>
                                    Second page
                                </p>
                            </div>
                        </div>
                    </div>
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
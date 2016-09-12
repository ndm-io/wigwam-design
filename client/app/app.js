'use strict';

// Layout

const React = require('react');

const Nav = require('./core/nav');

const init = function () {

    const wrapperStyle = {
        fontFamily: "Dosis, sans-serif"
    };

    return {
        render: function () {
            return (
                <div className="wrapper" style={wrapperStyle}>
                    <Nav/>
                    {this.props.children}
                </div>
            );
        }
    };
};

module.exports = {
    metadata:{
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
    component: React.createClass(init())
};


'use strict';

// Layout

const React = require('react');

const init = function () {

    const wrapperStyle = {
        fontFamily: "Dosis, sans-serif"
    };

    return {
        render: function () {
            return (
                <div className="wrapper" style={wrapperStyle}>
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
            description: "Wigwam is a North Wales based interior design studio specialising in residential projects for private individuals"
        },
        templates: {
            header: 'header',
            footer: 'footer'
        }
    },
    component: React.createClass(init())
};


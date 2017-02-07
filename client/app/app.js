'use strict';

const React = require('react');

const Footer = require('./core/footer');
const WheelEvent = require('./core/wheel-event');

const init = function () {

    const wrapperStyle = {
        fontFamily: "Open Sans, sans-serif"
    };


    return {

        handleWheel: function (e) {
            WheelEvent.postWheelEvent(e);
        },

        render: function () {
            return (

                <div>
                    <div ref="body" className="wrapper" style={wrapperStyle} onWheel={this.handleWheel}>

                            {this.props.children}

                    </div>
                    <Footer />
                </div>


            );
        }
    };
};

module.exports = {
    metadata: {
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


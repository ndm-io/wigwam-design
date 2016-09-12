const React = require('react');

const init = function () {
    return {
        render: function () {
            return (
                <div>
                    <h1>
                        The about page
                    </h1>
                    <p>
                        An amount of text
                    </p>
                </div>
            )
        }
    };
};

module.exports = {
    metadata: {
        route: '/about',
        params: {
            title: "Wigwam Design | About",
            keywords: "interior,design,studio,lancashire,shropshire",
            description: "Interior Design | Design Services"
        },
        templates: {
            header: 'header',
            footer: 'footer'
        },
    },
    component: React.createClass(init())
};
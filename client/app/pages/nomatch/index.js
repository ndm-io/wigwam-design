const React = require('react');

const init = function () {
    return {
        render: function () {
            return (
                <div>
                    <h1>No match to that url</h1>
                </div>
            )
        }
    };
};

module.exports = {
    metadata: {
        route: '*',
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
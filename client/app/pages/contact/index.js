const React = require('react');

const init = function () {
    return {
        render: function () {
            return (
                <div>
                    <h1>
                        The contact us page
                    </h1>
                    <p>
                        contact
                    </p>
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
            description: "Contact an Interior Designer"
        },
        templates: {
            header: 'header',
            footer: 'footer'
        }
    },
    component: React.createClass(init())
};
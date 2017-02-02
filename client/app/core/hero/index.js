const React = require('react');

const init = function () {

    const heroStyle = function (url) {
        return {
            height: "100vh",
            backgroundSize: "cover",
            background: "url('" + url + "') no-repeat fixed center center"
        };
    };

    const contentStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh"
    };

    return {

        propTypes: {
            backgroundUrl: React.PropTypes.string.isRequired,
            styles: React.PropTypes.string
        },

        componentDidMount: function () {

        },
        /*
         render: function () {
         return (
         <div style={heroStyle(this.props.backgroundUrl)} className={this.props.styles}>
         <div className="container">
         <div className="row">
         <div className="col-md-12 text-center" style={contentStyle}>
         {this.props.children}
         </div>
         </div>
         </div>
         </div>
         );
         }
         };
         */
        render: function () {
            return (
                <section className="module-hero module-parallax module-full-height bg-dark-60">


                    <div className="hero-caption">
                        <div className="hero-text">

                            <h1 className="mh-line-size-1 font-alt m-b-50">WIGWAM DESIGN</h1>
                            <h5 className="mh-line-size-4 font-alt">an interiors company</h5>

                        </div>
                    </div>


                </section>
            );
        }
    }
};

module.exports = React.createClass(init());
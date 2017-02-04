const React = require('react');

const init = function () {

    const urlFor = function (string) {
        return "url(" + string + ")";
    };

    const parallaxHeight = function (percent) {
        return {
            height: percent + "vh"
        };
    };

    const backStyle = function (urlString) {
        return {
            backgroundImage: urlFor(urlString),
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            top: "0",
            left: "0"
        };
    };

    return {

        propTypes: {
            backgroundUrl: React.PropTypes.string.isRequired,
            heightPercent: React.PropTypes.number.isRequired,
            dark: React.PropTypes.bool.isRequired
        },

        render: function () {

            let backClasses = "parallax__layer parallax__layer--back";

            if (this.props.dark) {
                backClasses = backClasses + " bg-dark-60"
            }


            return (
                <section>

                    <div className="parallax" style={parallaxHeight(this.props.heightPercent)}>
                        <div className={backClasses} style={backStyle(this.props.backgroundUrl)}>

                        </div>
                        <div className="parallax__layer parallax__layer--base">

                            {this.props.children}

                        </div>
                    </div>

                </section>
            );
        }
    }
};


module.exports = React.createClass(init());
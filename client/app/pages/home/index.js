const React = require('react');
const isBrowser = require('../../core/is-browser.js');
const legacy = require('../../legacy');

const Nav = require('../../core/nav');

const initHomePage = function () {

    return {

        componentDidMount: function () {

            if (!isBrowser()) { return }

            legacy();

        },

        render: function () {

            return (
                <div>

                    <div className="page-loader">
                        <div className="loader">Loading...</div>
                    </div>

                    <div className="menu"></div>

                    <div className="wrapper">


                        <Nav classes="navbar-custom navbar-transparent"
                             logo="assets/images/svg/logo_wigwam_compact_white_100x35.svg"/>

                        <section is id="hero" class="module-hero module-parallax module-full-height bg-dark-60"
                                 data-background="assets/images/section-5.jpg">


                            <div className="hero-caption">
                                <div className="hero-text">

                                    <h1 className="mh-line-size-1 font-alt m-b-50">WIGWAM DESIGN</h1>
                                    <h5 className="mh-line-size-4 font-alt">an interiors company</h5>

                                </div>
                            </div>

                        </section>
                        <section id="portfolio" className="module">

                            <div className="container">


                                <div className="row">

                                    <div className="col-sm-12">
                                        <ul id="filters" className="filters font-alt">
                                            <li>
                                                <a href="index_1.html#" is data-filter="*" className="current">All
                                                    <sup>
                                                        <small>.29</small>
                                                    </sup>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index_1.html#" is data-filter=".branding">Styling
                                                    <sup>
                                                        <small>.4</small>
                                                    </sup>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index_1.html#" is data-filter=".design">Design
                                                    <sup>
                                                        <small>.5</small>
                                                    </sup>
                                                </a>
                                            </li>
                                            <li><a href="index_1.html#" is data-filter=".photo">Photo <sup>
                                                <small>.9</small>
                                            </sup></a></li>
                                            <li><a href="index_1.html#" is data-filter=".web">Web <sup>
                                                <small>.11</small>
                                            </sup></a></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="row">

                                    <div id="works-grid" className="works-grid works-hover-w">


                                        <div className="grid-sizer"></div>


                                        <div className="work-item tall branding">
                                            <a>
                                                <img src="img/elegant-floor-lamp.jpg" alt="Elegant Floor Lamp"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Elegant</h3>
                                                    <div className="work-descr">
                                                        Web / Photo
                                                    </div>
                                                </div>
                                            </a>
                                        </div>


                                        <div className="work-item design">
                                            <a>
                                                <img src="img/styling-geometric-monochrome.jpg"
                                                     alt="Styling Geometric Monochrome"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Styling</h3>
                                                    <div className="work-descr">
                                                        Styling / Web / Design
                                                    </div>
                                                </div>
                                            </a>
                                        </div>


                                        <div className="work-item design">
                                            <a>
                                                <img src="img/unwind-walllight-chrome.jpg"
                                                     alt="Unwind Chrom Wall Light"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Unwind</h3>
                                                    <div className="work-descr">
                                                        Web / Photo
                                                    </div>
                                                </div>
                                            </a>
                                        </div>


                                        <div className="work-item design">
                                            <a>
                                                <img src="img/antiquebrass-walllight-statement.jpg"
                                                     alt="Antique Wall Light Statement"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Antique Brass</h3>
                                                    <div className="work-descr">
                                                        Web / Photo
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item design">
                                            <a>
                                                <img src="img/black-gold-geometric.jpg"
                                                     alt="Black and Gld Geometric"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Black & Gold</h3>
                                                    <div className="work-descr">
                                                        Design / Web
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item wide-tall branding photo web">
                                            <a>
                                                <img src="img/zoffany-metalics-black-gold.jpg"
                                                     alt="Zoffany Metalics Black and Gold"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Metalics</h3>
                                                    <div className="work-descr">
                                                        Photo / Web
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item wide design photo web">
                                            <a>
                                                <img src="img/london-chrome-furniture.jpg"
                                                     alt="London Chrome Furniture"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Mechandising</h3>
                                                    <div className="work-descr">
                                                        Design / Styling
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item branding photo">
                                            <a>
                                                <img src="img/impactive-tablelamp-blackgold.jpg"
                                                     alt="Impactive Table Lamp Black and Gold"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Impactive</h3>
                                                    <div className="work-descr">
                                                        Photo
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item branding photo">
                                            <a>
                                                <img src="img/wallpaper-relaxed-tonal.jpg"
                                                     alt="Relaxed Tonal Wallpaper"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Relaxed</h3>
                                                    <div className="work-descr">
                                                        Web / Photo
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item wide design web">
                                            <a>
                                                <img src="img/trend-blue-copper.jpg" alt="Trend Blue Copper"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Blue & Copper</h3>
                                                    <div className="work-descr">
                                                        Design / Styling
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item wide design web">
                                            <a>
                                                <img src="img/pendant-light-feature.jpg"
                                                     alt="Pendant Feature Light"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Feature</h3>
                                                    <div className="work-descr">
                                                        Photo / Web
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item wide design web">
                                            <a>
                                                <img src="img/geometric-black-white.jpg"
                                                     alt="Geometric Black and White"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Geometric</h3>
                                                    <div className="work-descr">
                                                        Design / Styling / Web
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item wide design web">
                                            <a>
                                                <img src="img/antique-silver-walllight.jpg"
                                                     alt="Antique Silver Wall Light"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Sculptural</h3>
                                                    <div className="work-descr">
                                                        Photo / Web
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="work-item wide design web">
                                            <a>
                                                <img src="img/marble-grey-brass.jpg" alt="Marble Grey Brass"/>
                                                <div className="work-caption font-alt">
                                                    <h3 className="work-title">Soothing</h3>
                                                    <div className="work-descr">
                                                        Photo / Web
                                                    </div>
                                                </div>
                                            </a>
                                        </div>


                                    </div>

                                </div>

                            </div>
                        </section>


                        <div className="footer"></div>


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
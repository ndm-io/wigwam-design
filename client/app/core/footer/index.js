const React = require('react');

const init = function () {
    return {
        render: function () {
            return (
                <footer className="module bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="social-text-links font-alt text-center m-b-20">
                                    <li><a href="https://www.instagram.com/wigwam.design/">Instagram</a></li>
                                    <li><a href="https://twitter.com/wigwamdesign" target="_blank">Twitter</a></li>
                                    <li><a href="https://uk.pinterest.com/wigwamdesign/" target="_blank">Pinterest</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row m-b-20">
                            <div className="col-sm-12">
                                <table style={{margin: "auto"}}>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <a href="https://www.houzz.co.uk/pro/wigwamdesign/$url" target="_blank">
                                                <img src="https://st.hzcdn.com/static_en-GB/badge64_64@2x.png"
                                                     alt="Wigwam Design, UK on Houzz"
                                                     width="64" height="64"/>
                                            </a>
                                        </td>
                                        <td>
                                            &nbsp;
                                        </td>
                                        <td>
                                            <a href="https://www.houzz.co.uk/pro/wigwamdesign/wigwam-design"
                                               target="_blank">
                                                <img src="https://st.hzcdn.com/static_en-GB/badge_41_8@2x.png"
                                                     alt="Wigwam Design, UK on Houzz"
                                                     width="64"
                                                     height="64"/>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="copyright text-center m-b-0">© 2016 <a href="#">wigwam.design</a>, All
                                    Rights
                                    Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        }
    }
};

module.exports = React.createClass(init());
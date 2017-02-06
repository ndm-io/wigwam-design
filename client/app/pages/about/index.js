const React = require('react');
const Nav = require('../../core/nav');
const Hero = require('../../core/hero');

const Counter = require('../../core/counter');
const ProgressBar = require('../../core/progress-bar');

const init = function () {

    const COUNTER_TIME = 1000;

    return {

        render: function () {

            return (
                <div>

                    <Nav classes="navbar-custom navbar-light navbar-transparent"
                         logo="assets/images/svg/logo_wigwam_compact_100x35.svg"/>

                    <Hero backgroundUrl="assets/images/section-7.jpg" heightPercent={45} dark={false}>

                        <div className="hero-caption">
                            <div className="hero-text">

                                <h1 className="mh-line-size-3 font-alt m-b-20">About us</h1>
                                <h5 className="mh-line-size-4 font-alt">We don’t have a style — we have
                                    standards.</h5>

                            </div>
                        </div>

                    </Hero>

                    <section className="module">

                        <div className="container">

                            <div className="row">


                                <div className="col-sm-4">

                                    <h4 className="font-alt m-t-0 m-b-20">About the Studio</h4>
                                    <p>
                                        Wigwam is a North Wales based interior design studio specialising in
                                        residential projects for private individuals throughout the UK.
                                    </p>

                                </div>

                                <div className="col-sm-4">

                                    <h4 className="font-alt m-t-0 m-b-20">What We Do</h4>
                                    <p>
                                        Wigwam provides a personalised, relaxed design service from their studio in
                                        Llangollen.
                                        Sam designs each project personally, whilst also concentrating on what she
                                        does best and giving
                                        the client the peace of mind that the project will be carried
                                        out seamlessly.
                                    </p>

                                </div>

                                <div className="col-sm-4">

                                    <ProgressBar title="Design" value={90}/>
                                    <ProgressBar title="Styling" value={80}/>
                                    <ProgressBar title="Digital" value={50}/>
                                    <ProgressBar title="3D" value={30}/>

                                </div>


                            </div>

                        </div>

                    </section>

                    <section className="module bg-dark"
                             style={{backgroundImage: "url('assets/images/video_background.jpg')"}}>

                        <div className="container">

                            <div className="row">


                                <Counter title="Cups of tea"
                                         to={501}
                                         time={COUNTER_TIME}/>
                                <Counter title="Elle Decor Magazines"
                                         to={36}
                                         time={COUNTER_TIME}/>
                                <Counter title="Photos taken"
                                         to={210}
                                         time={COUNTER_TIME}/>
                                <Counter title="Happy Clients"
                                         to={98}
                                         time={COUNTER_TIME}
                                         suffix="%"/>

                            </div>

                        </div>


                    </section>

                    <section id="services" className="module">

                        <div className="container">


                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <h2 className="module-title font-alt">Services</h2>
                                </div>
                            </div>


                            <div className="row multi-columns-row">


                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="content-box">
                                        <div className="content-box-icon">
                                            <i className="ion-ios-rose-outline"/>
                                        </div>
                                        <h5 className="content-box-title font-alt">Bespoke</h5>
                                        <div className="content-box-text">
                                            If your focus is on an individual room, we’ll work with you to create a
                                            truly outstanding
                                            space
                                            that complements your taste and lifestyle. From a high spec kitchen to a
                                            sophisticated
                                            lounge or
                                            bedroom space, we will consider every aspect of your design
                                            and installation in meticulous detail.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="content-box">
                                        <div className="content-box-icon">
                                            <i className="ion-ios-compose-outline"/>
                                        </div>
                                        <h5 className="content-box-title font-alt">Design</h5>
                                        <div className="content-box-text">
                                            Sam will work with you to unlock your property’s potential while
                                            improving the flow and
                                            functionality of the space, ensuring every detail works in harmony with
                                            the next.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="content-box">
                                        <div className="content-box-icon">
                                            <i className="ion-ios-home-outline"/>
                                        </div>
                                        <h5 className="content-box-title font-alt">Decoration</h5>
                                        <div className="content-box-text">
                                            If you’re simply planning to update an existing room or entirely
                                            refurbish a newly acquired
                                            property, you can commission our creative team to select the perfect
                                            finishes and specify a
                                            colour palette to complement your taste and transform your home.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="content-box">
                                        <div className="content-box-icon">
                                            <i className="ion-ios-medical-outline"/>
                                        </div>
                                        <h5 className="content-box-title font-alt">Style</h5>
                                        <div className="content-box-text">
                                            Whether you desire the understated elegance of a classic contemporary
                                            interior or the warmth
                                            of
                                            a traditional design, our talented designers have the vision to both
                                            meet and exceed your
                                            aspirations.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="content-box">
                                        <div className="content-box-icon">
                                            <i className="ion-ios-flower-outline"/>
                                        </div>
                                        <h5 className="content-box-title font-alt">Enhancing</h5>
                                        <div className="content-box-text">
                                            Our focus is always on enhancing the inherent character and period of
                                            your property,
                                            combined
                                            with creating a space that is a true expression of your personality.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="content-box">
                                        <div className="content-box-icon">
                                            <i className="ion-ios-wineglass-outline"/>
                                        </div>
                                        <h5 className="content-box-title font-alt">Detail</h5>
                                        <div className="content-box-text">
                                            We continue to add detail and thought to each and every individual
                                            aspect of the project
                                            right
                                            up until installation, liaising with our suppliers and contractors to
                                            achieve a design of
                                            impeccable quality.
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </section>

                    <section is class="module module-parallax bg-light-30"
                             data-background="assets/images/section-3.jpg">

                        <div className="container">

                            <div className="row">

                                <div className="col-sm-6 col-sm-offset-3">


                                    <div className="owl-carousel slider-testimonials text-center">


                                        <div className="item testimonial">
                                            <h5 className="module-icon m-b-20">
                                                <i className="ion-ios-chatboxes-outline"/>
                                            </h5>
                                            <div className="font-serif m-b-20">
                                                Her practical experience and design education make her a a rounded
                                                professional whilst
                                                her
                                                friendly and easy nature puts clients at ease very early in the
                                                process. Her love for
                                                the
                                                industry and all things interiors is apparent throughout everything
                                                she
                                                does, this makes her a fantastic designer to work with.
                                            </div>
                                            <div className="quote-author font-alt">Claire / CW Interiors</div>
                                        </div>

                                        <div className="item testimonial">
                                            <h5 className="module-icon m-b-20">
                                                <i className="ion-ios-chatboxes-outline"/>
                                            </h5>
                                            <div className="font-serif m-b-20">
                                                A personable individual with a eye for detail and a flair for
                                                design. We commission Sam
                                                on a
                                                regular basis to help style our showhomes, we would highly recommend
                                                them. They are very
                                                creative and excellent at producing creative designs and
                                                installation.
                                            </div>
                                            <div className="quote-author font-alt">Alex, Stanza Style.</div>
                                        </div>

                                        <div className="item testimonial">
                                            <h5 className="module-icon m-b-20">
                                                <i className="ion-ios-chatboxes-outline"/>
                                            </h5>
                                            <div className="font-serif m-b-20">
                                                We have worked alongside Sam at Wigwam Design on many interior
                                                projects for quite a few
                                                years now. Sam is very thoughtful, creative, has great style and a
                                                strong work ethic.
                                                Inspirational ideas and schemes. A joy to work with: Great teamwork!
                                            </div>
                                            <div className="quote-author font-alt">Suzie, Design Fix Interiors.
                                            </div>
                                        </div>

                                        <div className="item testimonial">
                                            <h5 className="module-icon m-b-20">
                                                <i className="ion-ios-chatboxes-outline"/>
                                            </h5>
                                            <div className="font-serif m-b-20">
                                                Pleasure to deal with, Sam at Wigwam design is the ultimate
                                                professional,
                                                love her attention to detail and you can always rely on Sam to think
                                                outside the box
                                                when needed. Sam will put you at ease from the moment you meet with
                                                her, and has a great
                                                knowledge and understanding of interior design wether it's a period
                                                look your after or a more
                                                modern contempery design. Looking forward to working with Sam
                                                @wigwam design on all my future
                                                projects. #WigWam Design
                                            </div>
                                            <div className="quote-author font-alt">Ian, Client.</div>
                                        </div>

                                        <div className="item testimonial">
                                            <h5 className="module-icon m-b-20">
                                                <i className="ion-ios-chatboxes-outline"/>
                                            </h5>
                                            <div className="font-serif m-b-20">
                                                Samantha from Wigwam design has been working with me for the past 6
                                                months on
                                                designing the interior of our new timber-framed house in Shropshire.
                                                From the start,
                                                Sam has been the true professional and quickly grasps an idea of
                                                your style and tastes
                                                and works with you to design stylish and practical interiors. We are
                                                extremely happy
                                                with Sam's ideas and those ideas can be put into reality with her
                                                great number of
                                                contacts that can source or make your visions come to life.
                                                <br/>
                                                I can highly recommend Sam, we will certainly be using her again
                                                on future projects.
                                            </div>
                                            <div className="quote-author font-alt">Josh, Client.</div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                    </section>

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
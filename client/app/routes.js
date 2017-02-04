const React = require('react'),
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

const App = require('./app').component,
    Home = require('./pages/home').component,
    About = require('./pages/about').component,
    Contact = require('./pages/contact').component,
    Nomatch = require('./pages/nomatch').component;

module.exports = (

    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
        <Route path="*" component={Nomatch}/>
    </Route>

);

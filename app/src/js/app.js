var React = require('react');
var Router = require('react-router');
var { Route } = Router;

var App = require('./components/App');
var Home = require('./components/Home');
var VisitorsList = require('./components/VisitorsList');

var routes = (
    <Route handler={App}>
        <Route name="home" path="/" handler={Home} />
        <Route name="visitors" path="/visitors/:name" handler={VisitorsList} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});

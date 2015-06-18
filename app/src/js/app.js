var React = require('react');
var Router = require('react-router');
var { DefaultRoute, Route } = Router;

var App = require('./components/App');
var VisitorsList = require('./components/VisitorsList');
var ActivityList = require('./components/ActivityList');
var Map = require('./components/Map');

var routes = (
    <Route handler={App}>
      <DefaultRoute name="Activities" path="/activities" handler={ActivityList} />
      <Route name="Visitors" path="/visitors" handler={VisitorsList} />
      <Route name="Map" path="/map" handler={Map} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});

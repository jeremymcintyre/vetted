var React = require('react');
var Router = require('react-router');
var { DefaultRoute, Route } = Router;

var App = require('./components/App');
var FriendsList = require('./components/FriendsList');
var ActivityList = require('./components/ActivityList');
var Map = require('./components/Map');
var About = require('./components/About');

var routes = (
    <Route handler={ App }>
      <DefaultRoute name="Activities" handler={ ActivityList } />
      <Route name="Friends" path="/friends" handler={ FriendsList } />
      <Route name="Map" path="/map" handler={ Map } />
      <Route name="About" path="/about" handler={ About } />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});

var React = require('react');
var Router = require('react-router');
var { DefaultRoute, Route } = Router;

var App = require('./components/App');
var HomeTabBar = require('./components/HomeTabBar');
var ActivityList = require('./components/ActivityList');
var PickFriend = require('./components/PickFriend');
var ActivitiesForFriend = require('./components/ActivitiesForFriend');
var MapForFriend = require('./components/MapForFriend');
var About = require('./components/About');
var AddActivity = require('./components/AddActivity');
var ChooseFriendsForActivity = require('./components/ChooseFriendsForActivity');
var AddLocation = require('./components/AddLocation');

var routes = (
    <Route path="/" handler={ App } >
      <Route handler={ HomeTabBar }>
        <DefaultRoute handler={ ActivityList }/>
        <Route name="Friends" path="friends" handler={ PickFriend }/>
        <Route name="Activities" path="activities" handler={ ActivitiesForFriend }/>
        <Route name="Map" path="map" handler={ MapForFriend }/>
        <Route name="About" path="about" handler={ About }/>
      </Route>
      <Route name="AddActivity"
             path="activity/new"
             handler={ AddActivity } />
      <Route name="ChooseFriendsForActivity"
             path="activity/new/choose-friends"
             handler={ ChooseFriendsForActivity }/>
      <Route name="AddLocation"
             path="activity/new/location"
             handler={ AddLocation }/>
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});

var React = require('react');
var Router = require('react-router');
var { DefaultRoute, Route } = Router;

var App = require('./components/App');

var routes = (
    <Route component={ AppBar }>
      <Route component={ HomeTabBar }>
        <Route component={ PickFriend }/>
        <Route component={ ActivitiesForFriend }/>
        <Route component={ MapForFriend }/>
        <Route component={ About }/>
      </Route>
      <Route component={ ChooseFriendsTabBar }>
        <Route component={ AddFriend }
        <Route component={ ChooseFriends }/>
      </Route>
      <Route component={ AddActivityTabBar }>
        <Route component={ AddActivity }/>
      </Route>
      <Route component={ AddLocationTabBar }>
        <Route component={ AddLocation }/>
      </Route>
    </Route>


    // <Route handler={ App }>
    //   <DefaultRoute name="Activities" handler={ ActivityList } />
    //   <Route name="Friends" path="/friends" handler={ FriendsList } />
    //   <Route name="Map" path="/map" handler={ Map } />
    //   <Route name="About" path="/about" handler={ About } />
    // </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});

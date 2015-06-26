var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;
var TabBar = require('./TabBar');

var HomeTabBar = React.createClass({
  render () {
    return (
    <div>
      <TabBar tabs={["Friends", {name: "Activities", path: "/"}, "Map"]} />
      <RouteHandler/>
    </div>)
  }
});

module.exports = HomeTabBar;
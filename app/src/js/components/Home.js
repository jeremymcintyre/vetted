var React = require('react');
var Router = require('react-router');
var {RouteHandler, Link} = Router;
var ActivityList = require('./ActivityList');



var Home = React.createClass({
  mixins: [ Router.State ],



	render () {
		return (
      <ActivityList />
		);
	}
});

module.exports = Home;

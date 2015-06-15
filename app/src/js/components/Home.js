var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var AppBar = require('./AppBar');
var ActivityList = require('./ActivityList');


var Home = React.createClass({
  mixins: [ Router.State ],

	render () {
		return (
			<div>
				<AppBar text="Activities" />
        <ActivityList />
			</div>
		);
	}
});

module.exports = Home;

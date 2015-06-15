var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var mui = require('material-ui');
var AppBar = mui.AppBar;
var ActivityList = require('./ActivityList');


var Home = React.createClass({
  mixins: [ Router.State ],

	render () {
		return (
			<div>
				<AppBar title="Activities - Home" />
        <ActivityList />
			</div>
		);
	}
});

module.exports = Home;

var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var AppBar = require('./AppBar');
var ActivityList = require('./ActivityList');
var SideBarMenu = require('./SideBarMenu');
var VisitorsList = require('./VisitorsList');


var Home = React.createClass({
  mixins: [ Router.State ],

  toggleLeft () {
    this.refs.left.toggle();
  },

	render () {
		return (
			<div>
				<AppBar leftClick={this.toggleLeft} text="Activities" />
        <SideBarMenu offMenuClick={this.toggleLeft} children={<VisitorsList/>} ref='left' alignment='left'>
        </SideBarMenu>
        <ActivityList />
			</div>
		);
	}
});

module.exports = Home;

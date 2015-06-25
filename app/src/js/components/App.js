var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;
var AppBar = require('./AppBar');
var SideBarMenu = require('./SideBarMenu');
var ActivityList = require('./ActivityList');

var App = React.createClass({

  toggleLeft () {
    this.refs.left.toggle();
  },

  render: function() {
    return (
      <div className="container">
        <AppBar leftClick={ this.toggleLeft } text='vetted' />
        <SideBarMenu
          offMenuClick={ this.toggleLeft }
          children={[
            {name: "Home", path: "/"},
            {name: "About", path: "About"},
            {name: "Settings", path: "/"}
            ]}
          ref='left'
          alignment='left' />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
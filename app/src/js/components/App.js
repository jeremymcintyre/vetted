var React = require('react');
var Router = require('react-router');
var { RouteHandler, Link } = Router;
var AppBar = require('./AppBar');
var TabBar = require('./TabBar');
var SideBarMenu = require('./SideBarMenu');

var App = React.createClass({

  toggleLeft () {
    this.refs.left.toggle();
  },

  render: function() {
    return (
      <div className="container">
        <AppBar leftClick={this.toggleLeft} text="vetted" />
        <TabBar tabs={[
          {name: "Who with?", path: "Visitors"},
          "Activities",
          "Map"
          ]} />
        <SideBarMenu
          offMenuClick={this.toggleLeft}
          children={[
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
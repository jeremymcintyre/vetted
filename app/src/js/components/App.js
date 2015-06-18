var React = require('react');
var Router = require('react-router');
var { RouteHandler, Link } = Router;
var AppBar = require('./AppBar');
var SideBarMenu = require('./SideBarMenu');
var TabBar = require('./TabBar');
var VisitorsList = require('./VisitorsList');

var App = React.createClass({

  toggleLeft () {
    this.refs.left.toggle();
  },
  render: function() {
    return (
      <div className="container">
        <AppBar leftClick={this.toggleLeft} text="Activities" />
        <TabBar tabs={["Visitors", "Activities"]} />
        <SideBarMenu
          offMenuClick={this.toggleLeft}
          children={<VisitorsList/>}
          ref='left'
          alignment='left' />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
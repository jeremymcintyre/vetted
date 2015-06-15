var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
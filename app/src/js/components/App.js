var React = require('react');
var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>Welcome</h1>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;

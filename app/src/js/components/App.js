var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var App = React.createClass({

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <RouteHandler />
      </div>
    );
  }
});

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = App;
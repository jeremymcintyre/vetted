var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var ViewActionCreators = require('../actions/ViewActionCreators');
var ActivityStore = require('../stores/ActivityStore');
var mui = require('material-ui');
var Activity = require('./Activity');


var ActivityList = React.createClass({
  mixins: [ Router.State ],

  // SEEDS FOR DISPLAY PURPOSES ONLY
  getInitialState () {
    return {
      activities: [
        {name: "SO", notes: "Get the wings"},
        {name: "Bear Brewing", notes: "ESB Nitro is amazing"},
        {name: "Sextant", notes: "Cappuccino, mocha or cold brew"}
      ]
    };
  },

  renderActivities () {
    return this.state.activities.map((activity) => {
      return <Activity params={ activity } />
    });
  },

  render () {
    return (
      <div>{this.renderActivities()}</div>
    )
  }
});


module.exports = ActivityList;
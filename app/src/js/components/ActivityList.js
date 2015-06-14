var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var ViewActionCreators = require('../actions/ViewActionCreators');
var ActivityStore = require('../stores/ActivityStore');
var mui = require('material-ui');
var Activity = require('./Activity');


var ActivityList = React.createClass({
  mixins: [ Router.State ],

  getInitialState () {
    return ActivityStore.getState();
  },

  componentDidMount () {
    ActivityStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadActivities();
  },

  componentWillUnmount () {
    ActivityStore.removeChangeListener(this.handleStoreChange);
  },

  handleStoreChange () {
    this.setState(ActivityStore.getState());
  },

  renderActivities () {
    return this.state.activities.map((activity) => {
      return <Activity params={ activity } />
    });
  },

  render () {
    return (
      <div>{ this.renderActivities() }</div>
    )
  }
});


module.exports = ActivityList;


var React = require('react');
var VisitorsStore = require('../stores/VisitorsStore');
var ViewActionCreators = require('../actions/ViewActionCreators');
var Router = require('react-router');

var VisitorsList = React.createClass({
  mixins: [ Router.State ],

  getInitialState () {
    return VisitorsStore.getState();
  },

  componentDidMount () {
    VisitorsStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadVisitors();
  },

  componentWillUnmount () {
    VisitorsStore.removeChangeListener(this.handleStoreChange);
  },

  handleStoreChange () {
    this.setState(VisitorsStore.getState());
  },

  deleteVisitor (visitor) {
    ViewActionCreators.deleteVisitor(visitor);
  },

  renderVisitors () {
    return this.state.visitors.map((visitor) => {
      return (
        <div className="visitor">
          {visitor}
          <div onClick={this.deleteVisitor.bind(this, visitor)}>Delete</div>
        </div>)
    });
  },

  render () {
    return <div>{ this.renderVisitors() }</div>;
  }

});

module.exports = VisitorsList;

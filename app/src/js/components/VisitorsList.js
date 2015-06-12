var React = require('react');
var VisitorsStore = require('../stores/VisitorsStore');
var ViewActionCreators = require('../actions/ViewActionCreators');
var Router = require('react-router');
var { Link } = Router;

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
      return <li>
        {visitor}
        <button onClick={this.deleteVisitor.bind(this, visitor)}>
          delete
        </button>
      </li>;
    });
  },

  render () {
    var name = this.getParams().name;
    return (
      <div className="visitors">
        <h2>Hello {name}</h2>
        <ul>
          {this.renderVisitors()}
          <li><Link to="home">Go Home</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = VisitorsList;

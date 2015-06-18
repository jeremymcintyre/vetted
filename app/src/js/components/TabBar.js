var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var TabBar = React.createClass({

  renderTabs (tabs) {
    return tabs.map((tab) => {
      return (
        <div className="tab">
          <Link to={ tab }>{ tab }</Link>
        </div>
      );
    });
  },

  render () {
    return (
      <div className="tab-bar">
        {this.renderTabs(this.props.tabs)}
      </div>
    );
  }
});

module.exports = TabBar;
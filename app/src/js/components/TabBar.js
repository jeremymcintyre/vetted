var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var TabBar = React.createClass({

  renderTabs (tabs) {
    var percentWidth = {width: 100/tabs.length + "%"};

    return tabs.map((tab, i) => {
      return (
        <div key={i} style={percentWidth} className="tab">
          <Link to={ tab.path || tab }>{ tab.name || tab }</Link>
        </div>
      );
    });
  },

  render () {
    return (
      <div className="tab-bar">
        {this.renderTabs(this.props.tabs)}
        <div id="active-bar"></div>
      </div>
    );
  }
});

module.exports = TabBar;
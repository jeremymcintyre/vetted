var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var InfoBar = React.createClass({
  render () {
    return <div className="infobar">{ this.props.infoText }</div>
  }
});

module.exports = InfoBar;
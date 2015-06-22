var React = require('react');
var IconButton = require('./IconButton');
var Router = require('react-router');
var { Link } = Router;

var AppBar = React.createClass({


  render () {
    return (
      <div className="app-bar">
        <IconButton handleClick={this.props.leftClick} icon="☰" />
        { this.props.text }
        <Link to="Visitors"><IconButton icon="+" classList='add-button' /></Link>
      </div>
    )
  }
});

module.exports = AppBar;
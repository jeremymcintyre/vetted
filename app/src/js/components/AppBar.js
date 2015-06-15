var React = require('react');
var IconButton = require('./IconButton');

var AppBar = React.createClass({
  render () {
    return (
      <div className="app-bar">
        <IconButton icon="☰" />
        { this.props.text }
        <IconButton icon="+" classList='add-button' />
      </div>
    )
  }
});

module.exports = AppBar;
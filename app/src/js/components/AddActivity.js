var React = require('react');
var InfoBar = require('./InfoBar');

var AddActivity = React.createClass({
  render () {
    return (
      <div>
        <InfoBar infoText="Describe activity" />
        <p>Hayyy</p>
      </div>
    )
  }
});

module.exports = AddActivity;
var React = require('react');
var InfoBar = require('./InfoBar');
var Map = require('./Map');

var AddLocation = React.createClass({
  render () {
    return (
      <div>
        <InfoBar infoText="Add map location" />
        <Map />
      </div>
    )
  }
});

module.exports = AddLocation;
var React = require('react');
var InfoBar = require('./InfoBar');
var Map = require('./Map');
var Button = require('./Button');
var Router = require('react-router');
var { Link } = Router;

var AddLocation = React.createClass({
  render () {
    return (
      <div>
        <InfoBar infoText="Add map location" />
        <Map />
        <Button className={"progress-button"}>
          <Link to="/">Save Location</Link>
        </Button>
      </div>
    )
  }
});

module.exports = AddLocation;
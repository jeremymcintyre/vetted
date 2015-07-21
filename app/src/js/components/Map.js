var React = require('react');

var Map = React.createClass({

  componentDidMount () {
    this.createMap();
  },

  createMap () {
    var coords = {lat: 37.7833, lng: -122.4167};
    var mapOptions = {
      minZoom: 10,
      zoom: 12,
      center: new google.maps.LatLng(coords.lat, coords.lng)
    }
    new google.maps.Map(this.refs.map.getDOMNode(), mapOptions);
  },

  render () {
    return (
      <div className="map">
        <div style={styles} ref="map">This is where the map should go!</div>
      </div>
    )
  }
});

module.exports = Map;

var styles = {
  position: 'absolute',
  width: '100%',
  height: '40%',
  minHeight: '200px'
};
var React = require('react');
var InfoBar = require('./InfoBar');
var FriendsList = require('./FriendsList');

var ChooseFriendsForActivity = React.createClass({
  render () {
    return (
      <div>
        <InfoBar infoText="Who would like this?" />
        <FriendsList selectable={true} />
      </div>
    )
  }
});

module.exports = ChooseFriendsForActivity;
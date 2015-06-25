var React = require('react');
var FriendsList = require('./FriendsList');

var PickFriend = React.createClass({
  render () {
    return <FriendsList selectable={false} />
  }
});

module.exports = PickFriend;
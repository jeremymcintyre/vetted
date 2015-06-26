var React = require('react');
var InfoBar = require('./InfoBar');
var FriendsList = require('./FriendsList');
var Button = require('./Button');
var Router = require('react-router');
var { Link } = Router;

var ChooseFriendsForActivity = React.createClass({
  render () {
    return (
      <div>
        <InfoBar infoText="Who would like this?" />
        <FriendsList selectable={true} />
        <Button className={"progress-button progress-button-friends"}>
          <Link to="AddLocation">Next</Link>
        </Button>
      </div>
    )
  }
});

module.exports = ChooseFriendsForActivity;
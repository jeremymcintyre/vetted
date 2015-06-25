var React = require('react');
var FriendsStore = require('../stores/FriendsStore');
var ViewActionCreators = require('../actions/ViewActionCreators');
var Router = require('react-router');
var Friend = require('./Friend');

var FriendsList = React.createClass({
  mixins: [ Router.State ],

  getInitialState () {
    return FriendsStore.getState();
  },

  componentDidMount () {
    FriendsStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadFriends();
  },

  componentWillUnmount () {
    FriendsStore.removeChangeListener(this.handleStoreChange);
  },

  handleStoreChange () {
    this.setState(FriendsStore.getState());
  },

  deleteFriend (friend) {
    ViewActionCreators.deleteFriend(friend);
  },

  renderFriends () {
    return this.state.friends.map((friend, i) => {
      return <Friend
        key={ i }
        selectable={ this.props.selectable }
        handleDelete={ this.deleteFriend.bind(this, friend) }
        friendInfo={ friend } />
    });
  },

  render () {
    return <div>{ this.renderFriends() }</div>;
  }

});

module.exports = FriendsList;

var { ActionTypes } = require('../Constants');
var AppDispatcher = require('../AppDispatcher');
var ApiUtil = require('../utils/ApiUtil');

var ViewActionCreators = {
  loadFriends () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_FRIENDS
    });
    ApiUtil.loadFriends();
  },

  deleteFriend (friend) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.FRIEND_DELETED,
      friend: friend
    });
    ApiUtil.deleteFriend(friend);
  },

  loadActivities () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_ACTIVITIES
    });
    ApiUtil.loadActivities();
  }
};

module.exports = ViewActionCreators;
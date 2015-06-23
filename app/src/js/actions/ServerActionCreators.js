var { ActionTypes } = require('../Constants');
var AppDispatcher = require('../AppDispatcher');

var ServerActionCreators = {
  loadedFriends (friends) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.FRIENDS_LOADED,
      friends: friends
    });
  },

  deletedFriend (friend) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.VISITOR_DELETED,
      friend: friend
    });
  },

  loadedActivities (activities) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.ACTIVITIES_LOADED,
      activities: activities
    });
  }

};

module.exports = ServerActionCreators;
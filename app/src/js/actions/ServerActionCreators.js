var { ActionTypes } = require('../Constants');
var AppDispatcher = require('../AppDispatcher');

var ServerActionCreators = {
  loadedVisitors (visitors) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.VISITORS_LOADED,
      visitors: visitors
    });
  },

  deletedVisitor (visitor) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.VISITOR_DELETED,
      visitor: visitor
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
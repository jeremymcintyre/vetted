var { ActionTypes } = require('../Constants');
var AppDispatcher = require('../AppDispatcher');
var ApiUtil = require('../utils/ApiUtil');

var ViewActionCreators = {
  loadVisitors () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_VISITORS
    });
    ApiUtil.loadVisitors();
  },

  deleteVisitor (visitor) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.VISITOR_DELETED,
      visitor: visitor
    });
    ApiUtil.deleteVisitor(visitor);
  },

  loadActivities () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_ACTIVITIES
    });
    ApiUtil.loadActivities();
  }
};

module.exports = ViewActionCreators;
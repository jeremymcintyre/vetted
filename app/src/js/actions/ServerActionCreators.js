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
  }

};

module.exports = ServerActionCreators;
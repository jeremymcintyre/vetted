var AppDispatcher = require('../AppDispatcher');
var { EventEmitter } = require('events');
var { ActionTypes } = require('../Constants');
var assign = require('react/lib/Object.assign');

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  visitors: ["Brian", "Jeremy"],
  loaded: false
};

var setState = (newState) => {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
};

var VisitorsStore = {
  addChangeListener (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState () {
    return state;
  }
};

VisitorsStore.dispatchToken = AppDispatcher.register((payload) => {
  var { action } = payload;

  if (action.type === ActionTypes.VISITORS_LOADED) {
    setState({
      loaded: true,
      visitors: action.visitors
    });
  }
  if (action.type === ActionTypes.VISITOR_DELETED) {
    var remainingVisitors = state.visitors.filter((visitor) => {
      return visitor.id !== action.visitor.id;
    });
    setState({ visitors: remainingVisitors });
  }

});

module.exports = VisitorsStore;


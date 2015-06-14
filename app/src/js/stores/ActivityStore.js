var AppDispatcher = require('../AppDispatcher');
var { EventEmitter } = require('events');
var { ActionTypes } = require('../Constants');
var assign = require('react/lib/Object.assign');

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  activities: [],
  loaded: false
};

var setState = (newState) => {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
};

var ActivityStore = {
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

ActivityStore.dispatchToken = AppDispatcher.register((payload) => {
  var { action } = payload;

  if (action.type === ActionTypes.ACTIVITIES_LOADED) {
    setState({
      loaded: true,
      activities: action.activities
    });
  }

});

module.exports = ActivityStore;
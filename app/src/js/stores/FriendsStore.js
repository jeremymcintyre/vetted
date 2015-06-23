var AppDispatcher = require('../AppDispatcher');
var { EventEmitter } = require('events');
var { ActionTypes } = require('../Constants');
var assign = require('react/lib/Object.assign');

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  friends: [],
  loaded: false
};

var setState = (newState) => {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
};

var FriendsStore = {
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

FriendsStore.dispatchToken = AppDispatcher.register((payload) => {
  var { action } = payload;

  if (action.type === ActionTypes.FRIENDS_LOADED) {
    setState({
      loaded: true,
      friends: action.friends
    });
  }
  if (action.type === ActionTypes.FRIEND_DELETED) {
    var remainingFriends = state.friends.filter((friend) => {
      return friend !== action.friend;
    });
    setState({ friends: remainingFriends });
  }

});

module.exports = FriendsStore;


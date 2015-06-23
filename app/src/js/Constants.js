var keyMirror = require('react/lib/keyMirror');

module.exports = {
  // API: 'http://localhost',

  ActionTypes: keyMirror({
    LOAD_FRIENDS: null,
    FRIENDS_LOADED: null,
    FRIEND_DELETED: null,
    LOAD_ACTITIVES: null,
    ACTIVITIES_LOADED: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};


var keyMirror = require('react/lib/keyMirror');

module.exports = {
  // API: 'http://localhost',

  ActionTypes: keyMirror({
    LOAD_VISITORS: null,
    VISITORS_LOADED: null,
    VISITOR_DELETED: null,
    LOAD_ACTITIVES: null,
    ACTIVITIES_LOADED: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};


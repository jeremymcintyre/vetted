var keyMirror = require('react/lib/keyMirror');

module.exports = {
  // API: 'http://localhost',

  ActionTypes: keyMirror({
    VISITORS_LOADED: null,
    LOAD_VISITORS: null,
    VISITOR_DELETED: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};


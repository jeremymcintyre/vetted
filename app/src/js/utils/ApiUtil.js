var xhr = require('../lib/xhr');
var { API, ActionTypes } = require('../Constants');
var ServerActionCreators = require('../actions/ServerActionCreators');

var ApiUtils = {
  loadVisitors () {
    // xhr.getJSON(`${API}/visitors`, (err, res) => {
      ServerActionCreators.loadedVisitors(["Brian", "Jeremy", "Kendal"]);
    // });
  },

  deleteVisitor (visitor) {
    // xhr.deleteJSON(`$(API/visitors/${visitor.id}`, (err, res) => {
      ServerActionCreators.deletedVisitor(visitor);
    // });
  }
};

module.exports = ApiUtils;
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
  },

  loadActivities () {
    ServerActionCreators.loadedActivities([
        {name: "SO", notes: "Get the wings"},
        {name: "Bear Brewing", notes: "ESB Nitro is amazing"},
        {name: "Sextant", notes: "Cappuccino, mocha or cold brew"},
        {name: "Laguna", notes: "Awesome hookah / open late night life"}
      ]);
  }

};

module.exports = ApiUtils;
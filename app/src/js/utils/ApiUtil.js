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
        {name: "ThirstyBear Brewing Co", notes: "ESB Nitro is amazing"},
        {name: "Sextant", notes: "Cappuccino, mocha or cold brew"},
        {name: "Laguna", notes: "Awesome hookah / open late night life"},
        {name: "Sightglass", notes: "Picturesque, cappuccino is amazing"},
        {name: "Golden Gate Park", notes: "Rent bikes, go to the beach"},
        {name: "Garaje", notes: "Fish/shrimp tacos or pulled pork"},
        {name: "Alembic", notes: "Last word - can be loud"},
        {name: "Osaka Sushi", notes: "Sunday happy hour at 4pm"},
        {name: "Green Chile", notes: "Best breakfast burritos"},
        {name: "Cafe Chaat", notes: "Go-to Indian food"},
        {name: "The Chieftain", notes: "Irish breakfast and a Magners"}
      ]);
  }

};

module.exports = ApiUtils;
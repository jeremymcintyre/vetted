var xhr = require('../lib/xhr');
var { API, ActionTypes } = require('../Constants');
var ServerActionCreators = require('../actions/ServerActionCreators');

var ApiUtils = {
  loadFriends () {
    // xhr.getJSON(`${API}/friends`, (err, res) => {
      ServerActionCreators.loadedFriends(["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "Indigo", "Juliet"]);
    // });
  },

  deleteFriend (friend) {
    // xhr.deleteJSON(`$(API/visitors/${friend.id}`, (err, res) => {
      ServerActionCreators.deletedFriend(friend);
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
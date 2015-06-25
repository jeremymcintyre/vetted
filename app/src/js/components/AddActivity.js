var React = require('react');
var TabBar = require('./TabBar');

var AddActivity = React.createClass({
  render () {
    return (
      <div>
        <TabBar tabs={[{name: "New Activity", path: "AddActivity"}]} />
        <p>Hayyy</p>
      </div>
    )
  }
});

module.exports = AddActivity;
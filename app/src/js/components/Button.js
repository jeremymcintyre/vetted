var React = require('react');

var Button = React.createClass({
  render () {
    return (
      <div className={ this.props.className }>
        { this.props.children }
      </div>
    )
  }
});

module.exports = Button;
var React = require('react');

var Button = React.createClass({
  render () {
    return (
      <div onClick={ this.props.handleClick } className={ this.props.className }>
        { this.props.children }
      </div>
    )
  }
});

module.exports = Button;
var React = require('react');

var Visitor = React.createClass({

  getInitialState () {
    return {
      buttonClass: ""
    }
  },

  toggleShowDelete () {
    this.setState({
      buttonClass: (this.state.buttonClass === "") ? "show-delete " : ""
    });
  },

  render () {
    return (
      <div
        onMouseEnter={this.toggleShowDelete}
        onMouseLeave={this.toggleShowDelete}
        className="visitor">
        {this.props.visitorInfo}
        <div className={this.state.buttonClass + "delete-icon"} onClick={this.props.handleDelete}>X</div>
      </div>
    )
  }
});

module.exports = Visitor;
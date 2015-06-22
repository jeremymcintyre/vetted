var React = require('react');

var Visitor = React.createClass({

  getInitialState () {
    return {
      buttonClass: "",
      selected: false,
      classList: "visitor"
    }
  },

  toggleShowDelete () {
    this.setState({
      buttonClass: (this.state.buttonClass === "") ? "show-delete " : ""
    });
  },

  toggleShowSelected () {
    var classList = "visitor";

    if (!this.state.selected)
      classList += " selected";

    this.setState({
      selected: !this.state.selected,
      classList: classList
    });
  },

  render () {
    return (
      <div
        onMouseEnter={ this.toggleShowDelete }
        onMouseLeave={ this.toggleShowDelete }
        onClick={ this.toggleShowSelected }
        className={ this.state.classList} >
        {this.props.visitorInfo}
        <div className={this.state.buttonClass + "delete-icon"} onClick={this.props.handleDelete}>X</div>
      </div>
    )
  }
});

module.exports = Visitor;
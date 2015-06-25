var React = require('react');

var Friend = React.createClass({

  getDefaultProps () {
    return {
      selectable: false,
      deletable: false
    }
  },

  getInitialState () {
    return {
      buttonClass: "",
      selected: false,
      classList: "friend"
    }
  },


  toggleShowDelete () {
    if (this.props.deletable) {
      this.setState({
        buttonClass: (this.state.buttonClass === "") ? "show-delete " : ""
      });
    }
  },

  toggleShowSelected () {
    if (this.props.selectable) {
      var classList = "friend";

      if (!this.state.selected)
        classList += " selected";

      this.setState({
        selected: !this.state.selected,
        classList: classList
      });
    }
  },

  render () {
    return (
      <div
        onMouseEnter={ this.toggleShowDelete }
        onMouseLeave={ this.toggleShowDelete }
        onClick={ this.toggleShowSelected }
        className={ this.state.classList } >
        { this.props.friendInfo }
        <div className={ this.state.buttonClass + "delete-icon" } onClick={ this.props.handleDelete }>X</div>
      </div>
    )
  }
});

module.exports = Friend;
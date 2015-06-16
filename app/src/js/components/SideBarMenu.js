var React = require('react');

var SideBarMenu = React.createClass({
  getInitialState () {
    return {
      visible: false
    }
  },

  toggle () {
    this.setState({visible: !this.state.visible});
  },

  buildClassList(alignment) {
    return (this.state.visible ? "visible " : "") + alignment;
  },

  render () {
    var alignment = this.props.alignment;
    return (
      <div className="sidebar-menu">
        <div className={this.buildClassList(alignment)}>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = SideBarMenu;
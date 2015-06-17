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
    var classList = this.buildClassList(alignment);
    return (
      <div className="sidebar-menu">
        <div onClick={this.props.offMenuClick} className={classList} id="screen"></div>
        <div className={classList}>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = SideBarMenu;